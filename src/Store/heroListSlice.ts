import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { Hero, HeroList } from './types'

const backColorElem = 'linear-gradient(to right, #ff4b2b, #ff416c)'

const isData = () => {
  const data = localStorage.getItem('items')
  return data ? JSON.parse(localStorage.getItem('items')!) : [{ id: '', item: '' }]
}

const initialState: HeroList = {
  items: isData(),
  backColor: backColorElem,
  item: '',
  status: 'loading',
  initialData: [],
  data: [],
  pageID: '',
}

export const fetchHeroList = createAsyncThunk(
  'heroList/fetchHeroList',
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
    changePageID: (state, action: PayloadAction<string | undefined>) => {
      state.pageID = action.payload
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
    favoriteHero: (state) => {
      state.data = state.items
        .filter((el: { id: string }) => el.id === state.pageID)
        .map((el) => el.item)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchHeroList.pending, (state) => {
      state.status = 'loading'
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

export const {
  addItem,
  removeItem,
  sortZA,
  sortAZ,
  allHero,
  favoriteHero,
  changePageID,
} = heroListSlice.actions

export default heroListSlice.reducer
