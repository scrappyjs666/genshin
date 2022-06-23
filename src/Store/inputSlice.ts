import { createSlice, PayloadAction } from '@reduxjs/toolkit'

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
    },
    removeInputField: (state) => {
      state.inputValue = ''
    },
  },
})

export const { inputChangeValue, removeInputField } = inputSlice.actions

export default inputSlice.reducer
