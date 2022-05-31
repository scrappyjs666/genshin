import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './slices/searchSlice';

export const store = configureStore({
  reducer: {counter: counterSlice},
})