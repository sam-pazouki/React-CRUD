import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Book } from '../types/book';

interface BookFormProps {
  initialData?: Book;
  onSubmit: (data: Book) => void; // Callback function to handle form submission
}

const BookForm: React.FC<BookFormProps> = ({ initialData, onSubmit }) => {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<Book>({
    defaultValues: initialData || {
      title: '',
      author: ''
    }
  });

  // Effect to set form values when initialData changes
  React.useEffect(() => {
    if (initialData) {
      setValue('title', initialData.title); // Set the title field value
      setValue('author', initialData.author); // Set the author field value
    }
  }, [initialData, setValue]);

  // Submit handler function triggered by form submission
  const onSubmitHandler: SubmitHandler<Book> = (data) => {
    onSubmit(data); // Pass form data to parent component's onSubmit function
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <div>
        <label htmlFor="title">Title</label>
        <input id="title" {...register('title', { required: true })} />
        {errors.title && <span>Title is required</span>}
      </div>

      <div>
        <label htmlFor="author">Author</label>
        <input id="author" {...register('author', { required: true })} />
        {errors.author && <span>Author is required</span>}
      </div>

      <button type="submit">Save</button>
    </form>
  );
};

export default BookForm;
