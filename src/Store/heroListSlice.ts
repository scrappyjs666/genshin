import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

interface HeroList {
  items: Object[{
    id:string,
    item:string,
  }];
  arrayIndex: number[];
}

const initialState: HeroList = {
  items: [],
  arrayIndex: [],
}

export const heroListSlice = createSlice({
  name: 'heroList',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<string>) => {
      state.items.push(action.payload)
      localStorage.setItem('items', JSON.stringify(state.items));
    },
    addIndex: (state, action: PayloadAction<number>) => {
      if(state.arrayIndex.includes(action.payload)) {
        state.arrayIndex = state.arrayIndex.filter((item) => item !== action.payload);
        return
      }
      state.arrayIndex.push(action.payload)
    },
  },
})

export const { addIndex, addItem } = heroListSlice.actions

export const selectCount = (state: RootState) => state.heroList.items

export default heroListSlice.reducer