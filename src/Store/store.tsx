import { configureStore } from '@reduxjs/toolkit'
import heroList from './heroListSlice'


export const store = configureStore({
  reducer: {
    heroList
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch