import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { stat } from 'fs'
import type { RootState } from './store'

interface Input {
  inputValue: string
}

const initialState: Input = {
  inputValue: '',
}

export const inputSlice = createSlice({
  name: 'inputValue',
  initialState,
  reducers: {
    inputChangeValue: (state, action: PayloadAction<string>) => {
      state.inputValue = action.payload
      console.log(state.inputValue)
    },
    removeInputField: (state) => {
      state.inputValue = ''
    },
  },
})

export const { inputChangeValue, removeInputField } = inputSlice.actions

export const selectCount = (state: RootState) => state.inputSlice.inputValue

export default inputSlice.reducer
