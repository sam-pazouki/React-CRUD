import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import HomePage from '../pages/HomePage';

const mockStore = configureStore([]);
const initialState = {
  books: {
    items: [],
    loading: false,
    error: null,
  },
};

describe('HomePage', () => {
  test('renders correctly', () => {
    const store = mockStore(initialState);
    const { getByLabelText, getByText } = render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );

    // Assuming BookForm is used in HomePage and needs to be tested
    const titleInput = getByLabelText(/title/i);
    const authorInput = getByLabelText(/author/i);
    const submitButton = getByText(/submit/i);

    // Example of testing interaction with BookForm
    fireEvent.change(titleInput, { target: { value: 'New Book' } });
    fireEvent.change(authorInput, { target: { value: 'John Doe' } });
    fireEvent.click(submitButton);

    // You may need to adjust the below based on your actual handleSubmit implementation
    expect(store.getActions()).toEqual([{ type: 'ADD_BOOK', payload: { title: 'New Book', author: 'John Doe' } }]);
  });
});
