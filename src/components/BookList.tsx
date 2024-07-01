import { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { fetchBooks, deleteBook, editBook } from '../redux/slices/bookSlice';
import { selectBooks, selectLoading, selectError } from '../redux/slices/bookSlice.selectors';
import { Link } from 'react-router-dom';
import { Book } from '../types/book';
import { useForm } from 'react-hook-form';
import '../styles.css';

const BookList: FC = () => {
  // Redux hooks for dispatching actions and selecting state
  const dispatch = useAppDispatch();
  const books = useAppSelector(selectBooks);
  const loading = useAppSelector(selectLoading);
  const error = useAppSelector(selectError);

  // State variables
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 5;
  const [editingBook, setEditingBook] = useState<Book | null>(null);

  // Form management with react-hook-form
  const { register, handleSubmit, reset } = useForm<Book>();

  // Fetch books from the server on component mount
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  // Handle delete book action
  const handleDelete = async (id: number) => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      try {
        await dispatch(deleteBook(id));
      } catch (error) {
        console.error('Error deleting book:', error);
      }
    }
  };

  // Handle edit book action
  const handleEdit = (book: Book) => {
    setEditingBook(book);
    reset(book); 
  };

  // Handle form submission for editing a book
  const onSubmit = (data: Book) => {
    if (editingBook) {
      dispatch(editBook({ ...editingBook, ...data }));
      setEditingBook(null); 
    }
  };

  // Filter books based on search term
  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination calculations
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

  // Function to handle pagination
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="bookListContainer">
      {/* Search bar */}
      <div className="searchBar">
        <input
          type="text"
          placeholder="Search by title or author"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Header */}
      <h1 className="bookListHeader">Book List</h1>

      {/* Loading and error handling */}
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      {/* List of books */}
      <ul className="bookItems">
        {currentBooks.map((book: Book) => (
          <li key={book.id} className="bookItem">
            {book.title} by {book.author}
            <div className="actions">
              <button className="deleteButton" onClick={() => handleDelete(book.id)}>
                Delete
              </button>
              <button className="editButton" onClick={() => handleEdit(book)}>
                Edit
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Edit form */}
      {editingBook && (
        <form onSubmit={handleSubmit(onSubmit)} className="editForm">
          <h2>Edit Book</h2>
          <label>
            Title:
            <input type="text" {...register('title', { required: true })} defaultValue={editingBook.title} />
          </label>
          <label>
            Author:
            <input type="text" {...register('author', { required: true })} defaultValue={editingBook.author} />
          </label>
          <div className="editActions">
            <button type="submit" className="saveButton">Save</button>
            <button type="button" className="cancelButton" onClick={() => setEditingBook(null)}>Cancel</button>
          </div>
        </form>
      )}

      {/* Pagination */}
      <ul className="pagination">
        {Array.from({ length: Math.ceil(filteredBooks.length / booksPerPage) }, (_, index) => (
          <li key={index}>
            <button onClick={() => paginate(index + 1)}>{index + 1}</button>
          </li>
        ))}
      </ul>

      {/* Link to add new book */}
      <Link to="/add" className="addBookLink">
        Add Book +
      </Link>
        <br />
        <br />
      {/* Footer */}
      <div className="footer">
        <p>&copy; 2024 Book Management App</p>
      </div>
    </div>
  );
};

export default BookList;
