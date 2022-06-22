import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getApiResource } from 'api/network'
import axios from 'axios'
import type { RootState } from './store'
import { Hero, HeroList } from './types'

const backColorElem = 'linear-gradient(to right, #ff4b2b, #ff416c)'

const initialState: HeroList = {
  items: JSON.parse(localStorage.getItem('items')!)
    ? JSON.parse(localStorage.getItem('items')!)
    : [{ id: '', item: '' }],
  backColor: backColorElem,
  item: '',
  status: 'loading',
  initialData: [],
  data: [],
}

export const fetchHeroList = createAsyncThunk(
  'heroList/fetchByIdStatus',
  async ({ url }: { url: string }) => {
    const { data } = await axios.get<string[]>(url)
    return data
  }
)

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
    sortAZ: (state) => {
      state.data = state.data.sort((a, b) => a.localeCompare(b))
    },
    sortZA: (state) => {
      state.data = state.data.reverse()
    },
    allHero: (state) => {
      state.data = state.initialData
    },
    favoriteHero: (state, action: PayloadAction<string>) => {
      state.data = state.items
        .filter((el: { id: string }) => el.id === action.payload)
        .map((el) => el.item)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchHeroList.pending, (state) => {
      state.status = 'loading'
      state.items = []
    })

    builder.addCase(
      fetchHeroList.fulfilled,
      (state, action: PayloadAction<string[]>) => {
        state.status = 'success'
        state.data = action.payload
        state.initialData = action.payload
      }
    )

    builder.addCase(fetchHeroList.rejected, (state) => {
      state.status = 'error'
      state.items = []
    })
  },
})

export const { addItem, removeItem, sortZA, sortAZ, allHero, favoriteHero } =
  heroListSlice.actions

export default heroListSlice.reducer
