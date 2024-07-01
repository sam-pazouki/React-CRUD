import React, { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { editBook } from '../redux/slices/bookSlice';
import { useParams, useNavigate } from 'react-router-dom';
import { selectBooks, selectLoading } from '../redux/slices/bookSlice.selectors';
import styles from './EditBookPage.module.scss';

interface FormValues {
  title: string;
  author: string;
}

const EditBookPage: React.FC = () => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormValues>(); 
  const { id } = useParams<{ id: string }>(); 
  const dispatch = useAppDispatch(); 
  const navigate = useNavigate(); 
  const books = useAppSelector(selectBooks); 
  const loading = useAppSelector(selectLoading); 
  const book = books.find((book) => book.id === parseInt(id || '', 10));

  // Effect to set form values when book data changes
  useEffect(() => {
    if (book) {
      setValue('title', book.title); 
      setValue('author', book.author); 
    }
  }, [book, setValue]);

  // Form submission handler
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    if (book) {
      dispatch(editBook({ ...book, ...data })); 
      navigate('/'); 
    }
  };

  // Loading state check
  if (loading) {
    return <p>Loading...</p>; 
  }

  return (
    <div className={styles.container}> 
      <h1>Edit Book</h1>
      {book ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="title">Title</label>
            <input id="title" {...register('title', { required: true })} defaultValue={book.title} /> 
            {errors.title && <span>This field is required</span>} 
          </div>
          <div>
            <label htmlFor="author">Author</label>
            <input id="author" {...register('author', { required: true })} defaultValue={book.author} /> 
            {errors.author && <span>This field is required</span>} 
          </div>
          <button type="submit">Update Book</button> 
        </form>
      ) : (
        <p>Book not found</p> 
      )}
    </div>
  );
};

export default EditBookPage; 
