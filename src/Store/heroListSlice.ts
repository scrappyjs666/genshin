import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

type Hero = {
  id: any
  item: string
}

interface HeroList {
  items: Hero[]
  backColor: string
  item: string
}

const initialState: HeroList = {
  items: JSON.parse(localStorage.getItem('items')!)
    ? JSON.parse(localStorage.getItem('items')!)
    : [{ id: '', item: '' }],
  backColor: 'linear-gradient(to right, #ff4b2b, #ff416c)',
  item: '',
}

export const heroListSlice = createSlice({
  name: 'heroList',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Hero>) => {
      if (state.items.find((el) => el.item === action.payload.item)) {
        state.items = state.items.filter(
          (el) => el.item !== action.payload.item
        )
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

export default heroListSlice.reducer
