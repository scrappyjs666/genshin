import { configureStore } from '@reduxjs/toolkit'
import heroList from './heroListSlice'
import inputSlice from './inputSlice'
import userSlice from './userSlice'

export const store = configureStore({
  reducer: {
    heroList,
    inputSlice,
    userSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
