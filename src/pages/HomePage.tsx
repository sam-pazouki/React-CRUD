import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { fetchBooks } from '../redux/slices/bookSlice'; // Importing fetchBooks action creator
import { selectBooks, selectLoading, selectError } from '../redux/slices/bookSlice.selectors'; // Importing selectors for books, loading state, and error state
import BookList from '../components/BookList'; // Importing BookList component

const HomePage: React.FC = () => {
  const dispatch = useAppDispatch(); // Redux dispatch function
  const books = useAppSelector(selectBooks); // Selecting books from Redux store state
  const loading = useAppSelector(selectLoading); // Selecting loading state from Redux store
  const error = useAppSelector(selectError); // Selecting error state from Redux store

  useEffect(() => {
    dispatch(fetchBooks()); // Fetching books when component mounts or when dispatch changes
  }, [dispatch]);

  if (!books) {
    return <p>No books available</p>; // Render message if books are not available
  }

  return (
    <div>
      <h1>Book Management</h1> {/* Main heading for the page */}
      {loading && <p>Loading books...</p>} {/* Display loading message if loading state is true */}
      {error && <p>Error loading books: {error}</p>} {/* Display error message if error state exists */}
      <BookList /> {/* Render BookList component to display books */}
    </div>
  );
};

export default HomePage;
