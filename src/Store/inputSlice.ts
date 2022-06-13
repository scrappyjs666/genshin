import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { act } from 'react-dom/test-utils';
import { ObjectType } from 'typescript';
import type { RootState } from './store'


interface Input {
  inputValue: string | undefined;
}

const initialState:Input = {
  inputValue : '',
}


export const inputSlice = createSlice({
  name: 'inputValue',
  initialState,
  reducers: {
    inputChangeValue: (state, action: PayloadAction<string>) => {
      state.inputValue = action.payload
      console.log(state.inputValue)
    },
  }})

export const { inputChangeValue } = inputSlice.actions

export const selectCount = (state: RootState) => state.inputSlice.inputValue

export default inputSlice.reducer