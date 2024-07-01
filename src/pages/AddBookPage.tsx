import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAppDispatch } from '../redux/hooks';
import { addBook } from '../redux/slices/bookSlice';
import { useNavigate } from 'react-router-dom';
import styles from './AddBookPage.module.scss'; 

// Interface for form values
interface FormValues {
  title: string;
  author: string;
  id?: number; 
}

// Functional component for adding a new book
const AddBookPage: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>(); // React Hook Form hook for form handling
  const dispatch = useAppDispatch(); 
  const navigate = useNavigate(); 

  // Form submission handler
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    dispatch(addBook({ ...data, id: Date.now() })); 
    navigate('/'); 
  };

  return (
    <div className={styles.container}> 
      <h1>Add a New Book</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="title">Title</label>
          <input id="title" {...register('title', { required: true })} /> 
          {errors.title && <span>This field is required</span>} 
        </div>
        <div>
          <label htmlFor="author">Author</label>
          <input id="author" {...register('author', { required: true })} /> 
          {errors.author && <span>This field is required</span>} 
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBookPage; 
