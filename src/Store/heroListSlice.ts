import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { act } from 'react-dom/test-utils'
import { ObjectType } from 'typescript'
import type { RootState } from './store'

type Hero = {
  id: any
  item: string
}

interface HeroList {
  items: Hero[]
  colorBtn: string
  item: string
  elements: {
    id: string | undefined
    item: string
  }
}

const initialState: HeroList = {
  items: JSON.parse(localStorage.getItem('items')!),
  colorBtn: '#f23',
  item: '',
  elements: {
    id: '',
    item: '',
  },
}

export const heroListSlice = createSlice({
  name: 'heroList',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Hero>) => {
      if (state.items.find((el) => el.item === action.payload.item)) {
        state.items = state.items.filter((el) => el.item !== action.payload.item)
        localStorage.setItem('items', JSON.stringify(state.items))
        return
      }
      state.items.push(action.payload)
      localStorage.setItem('items', JSON.stringify(state.items))
    },
    removeItem: (state, action: PayloadAction<string>) => {
      const index = state.items.findIndex((el) => el.item === action.payload)
      state.items.splice(index, 1)
      localStorage.setItem('items', JSON.stringify(state.items))
    },
  },
})

export const { addItem, removeItem } = heroListSlice.actions

export const selectCount = (state: RootState) => state.heroList.items

export default heroListSlice.reducer
