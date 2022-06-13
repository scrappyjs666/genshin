import { configureStore } from '@reduxjs/toolkit'
import heroList from './heroListSlice'
import inputSlice from './inputSlice'


export const store = configureStore({
  reducer: {
    heroList,
    inputSlice
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch