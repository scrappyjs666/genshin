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

const fetchHeroByHeroList = createAsyncThunk(
  'heroList/fetchByIdStatus',
  async (url) => {
    const { data } = await axios.get<string[]>(await getApiResource(url))
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
  },
  extraReducers: (builder) => {
    builder.addCase(fetchHeroByHeroList.pending, (state) => {
      state.status = 'loading'
      state.items = []
    })

    builder.addCase(
      fetchHeroByHeroList.fulfilled,
      (state, action: PayloadAction<string[]>) => {
        state.status = 'success'
        state.data = action.payload
        state.initialData = action.payload
      }
    )

    builder.addCase(fetchHeroByHeroList.rejected, (state) => {
      state.status = 'error'
      state.items = []
    })
  },
})

export const { addItem, removeItem } = heroListSlice.actions

export default heroListSlice.reducer
