import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AddBookPage from '../pages/AddBookPage';
import EditBookPage from '../pages/EditBookPage';
import BookList from '../components/BookList';

const PublicRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Route to HomePage component */}
      <Route path="/" element={<HomePage />} />

      {/* Route to AddBookPage component */}
      <Route path="/add" element={<AddBookPage />} />

      {/* Route to EditBookPage component with dynamic parameter :id */}
      <Route path="/edit/:id" element={<EditBookPage />} />

      {/* Route to BookList component */}
      <Route path="/books" element={<BookList />} />
    </Routes>
  );
};

export default PublicRoutes;
