import bookReducer, { fetchBooks, deleteBook } from '../redux/slices/bookSlice'; // Import reducer and actions to test
import { BookState } from '../types/book'; // Import BookState type for initial and expected states

const initialState: BookState = {
  books: [],
  loading: false,
  error: null,
};

// Test case to handle initial state
test('should handle initial state', () => {
  expect(bookReducer(undefined, { type: 'unknown' })).toEqual(initialState);
});

// Test case to handle fetchBooks.fulfilled action
test('should handle fetchBooks.fulfilled', () => {
  const action = { type: fetchBooks.fulfilled.type, payload: [{ id: 1, title: 'Book 1', author: 'Author 1' }] };
  const expectedState = {
    books: [{ id: 1, title: 'Book 1', author: 'Author 1' }],
    loading: false,
    error: null,
  };
  expect(bookReducer(initialState, action)).toEqual(expectedState);
});

// Test case to handle deleteBook.fulfilled action
test('should handle deleteBook.fulfilled', () => {
  const previousState: BookState = {
    books: [{ id: 1, title: 'Book 1', author: 'Author 1' }, { id: 2, title: 'Book 2', author: 'Author 2' }],
    loading: false,
    error: null,
  };
  const action = { type: deleteBook.fulfilled.type, payload: { id: 1 } };
  const expectedState: BookState = {
    books: [{ id: 2, title: 'Book 2', author: 'Author 2' }],
    loading: false,
    error: null,
  };
  expect(bookReducer(previousState, action)).toEqual(expectedState);
});
