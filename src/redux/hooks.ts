import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store'; // Importing RootState and AppDispatch types from store

// Custom hook to get the AppDispatch type for useDispatch hook
export const useAppDispatch = () => useDispatch<AppDispatch>();

// Custom hook with TypedUseSelectorHook for type-safe useSelector hook
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
