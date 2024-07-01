import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './slices/bookSlice';

// Configure Redux store with bookReducer
const store = configureStore({
  reducer: {
    books: bookReducer, 
  },
});

// Define RootState type based on the store's state structure
export type RootState = ReturnType<typeof store.getState>;

// Define AppDispatch type based on the store's dispatch function
export type AppDispatch = typeof store.dispatch;

export default store; 
