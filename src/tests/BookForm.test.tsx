import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BookForm from '../components/BookForm';

test('BookForm renders correctly and handles form submission with validation', () => {
  const handleSubmit = jest.fn();
  const { getByLabelText, getByText } = render(<BookForm onSubmit={handleSubmit} />);

  const titleInput = getByLabelText(/title/i);
  const authorInput = getByLabelText(/author/i);
  const submitButton = getByText(/submit/i);

  // Test empty submission
  fireEvent.click(submitButton);
  expect(handleSubmit).not.toHaveBeenCalled();

  // Test valid submission
  fireEvent.change(titleInput, { target: { value: 'New Book' } });
  fireEvent.change(authorInput, { target: { value: 'John Doe' } });
  fireEvent.click(submitButton);
  expect(handleSubmit).toHaveBeenCalledWith({ title: 'New Book', author: 'John Doe' });
});
