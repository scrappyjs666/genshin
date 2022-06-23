import { configureStore } from '@reduxjs/toolkit'
import heroList from './heroListSlice'
import inputSlice from './inputSlice'
import userSlice from './userSlice'
import heroPage from './heroPageSlice'

export const store = configureStore({
  reducer: {
    heroPage,
    heroList,
    inputSlice,
    userSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
