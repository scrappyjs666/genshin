import { configureStore } from '@reduxjs/toolkit'
import heroList from './heroList/heroListSlice'
import heroPage from './heroPage/heroPageSlice'
import inputSlice from './input/inputSlice'
import userSlice from './user/userSlice'

export const store = configureStore({
  reducer: {
    heroPage,
    heroList,
    inputSlice,
    userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
