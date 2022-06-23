import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { IHero, IHeroPageArray } from './Interface'


export const fetchHeroPage = createAsyncThunk(
  'heroPage/fetchHeroPage',
  async ({ url }: { url: string }) => {
    const { data } = await axios.get<IHero[]>(url)
    console.log(data)
    return data
  }
)

const initialState: IHeroPageArray = {
  heroPageArray: [],
  status: 'loading',
}

export const heroPageSlice = createSlice({
  name: 'heroPage',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchHeroPage.pending, (state) => {
      state.status = 'loading'
    })

    builder.addCase(
      fetchHeroPage.fulfilled,
      (state, action: PayloadAction<IHero[]>) => {
        state.heroPageArray = action.payload
        state.status = 'success'
      }
    )

    builder.addCase(fetchHeroPage.rejected, (state) => {
      state.status = 'error'
      state.heroPageArray = []
    })
  },
})

export default heroPageSlice.reducer
