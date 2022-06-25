import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { Idata, IHero } from './Interface'

export const fetchHeroPage = createAsyncThunk(
  'heroPage/fetchHeroPage',
  async (url: string) => {
    const { data } = await axios.get<IHero>(url)
    return data
  }
)

const initialState: Idata = {
  data: null,
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
      (state, action: PayloadAction<IHero>) => {
        state.data = action.payload
        state.status = 'success'
      }
    )

    builder.addCase(fetchHeroPage.rejected, (state) => {
      state.status = 'error'
      state.data = null
    })
  },
})

export default heroPageSlice.reducer
