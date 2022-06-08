import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ObjectType } from 'typescript';
import type { RootState } from './store'


type Hero = {
  id: string | undefined,
  item: string
}

interface HeroList {
  items: Hero[];
  elements: {
    id: string | undefined;
    item: string;
  }
}

const initialState: HeroList = {
  items: [],
  elements: {
    id:'',
    item:'',
  }
}

export const heroListSlice = createSlice({
  name: 'heroList',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Hero>) => {
      state.items.push(action.payload)
      localStorage.setItem('items', JSON.stringify(state.items));
    },
  },
})

export const { addItem } = heroListSlice.actions

export const selectCount = (state: RootState) => state.heroList.items

export default heroListSlice.reducer