import { RootState } from '../store'; 
import { Book } from '../../types/book'; 

// Selects the array of books from the Redux store state
export const selectBooks = (state: RootState): Book[] => state.books.books;

// Selects the loading state from the Redux store
export const selectLoading = (state: RootState): boolean => state.books.loading;

// Selects the error state from the Redux store
export const selectError = (state: RootState): string | null => state.books.error;
