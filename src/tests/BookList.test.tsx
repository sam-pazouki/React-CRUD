import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import BookList from '../components/BookList';
import axios from 'axios'; // Import axios for mocking API calls
import { deleteBook } from '../redux/slices/bookSlice'; // Import deleteBook action creator

jest.mock('axios'); // Mock axios for testing purposes

const mockStore = configureStore([]); 
const initialState = {
  books: {
    books: [
      { id: 1, title: 'Book 1', author: 'Author 1' },
      { id: 2, title: 'Book 2', author: 'Author 2' },
    ],
    loading: false,
    error: null,
  },
};

test('BookList renders correctly and handles book deletion', async () => {
  const store = mockStore(initialState); // Initialize mock store with initial state
  (axios.delete as jest.Mock).mockResolvedValue({}); // Mock axios.delete to resolve immediately with an empty object

  // Render BookList component wrapped in Provider with the mock store
  const { getAllByText } = render(
    <Provider store={store}>
      <BookList />
    </Provider>
  );

  const deleteButtons = getAllByText(/delete/i); // Get all delete buttons from BookList
  fireEvent.click(deleteButtons[0]); // Simulate click on the first delete button

  await waitFor(() => {
    expect(axios.delete).toHaveBeenCalledWith('/books/1'); // Verify axios.delete was called with the correct endpoint (adjust as per your API design)
  });

  const actions = store.getActions(); // Get actions dispatched to the mock store
  expect(actions).toContainEqual(deleteBook(1)); // Expect the deleteBook action with book ID 1 to be dispatched
});
