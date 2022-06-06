import { configureStore } from '@reduxjs/toolkit'
import counter from './counterSlice'
import heroList from './heroListSlice'


export const store = configureStore({
  reducer: {
    counter,
    heroList
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch