import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth'
import { IUser } from './interface'

const initialState: IUser = {
  email: null,
  id: null,
  status: 'loading',
  textError: undefined,
}

export const googleSignIn = createAsyncThunk('user/googleSignIn', async () => {
  const auth = getAuth()
  const provider = new GoogleAuthProvider()
  await signInWithPopup(auth, provider).then(({ user }) => {
    const data = user
    return data
  })
})

export const signUp = createAsyncThunk(
  'user/signUp',
  async ({
    loginEmail,
    loginPassword,
  }: {
    loginEmail: string
    loginPassword: string
  }) => {
    const auth = getAuth()
    const res = await signInWithEmailAndPassword(
      auth,
      loginEmail,
      loginPassword
    )
    return res.user
  }
)

export const createAcc = createAsyncThunk(
  'user/getUserInfo',
  async ({ email, password }: { email: string; password: string }) => {
    const auth = getAuth()
    const res = await createUserWithEmailAndPassword(auth, email, password)
    return res.user
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeErrorStatus(state) {
      state.status = 'success'
    },
  },
  extraReducers: (builder) => {
    builder.addCase(googleSignIn.pending, (state) => {
      state.status = 'loading'
    })

    builder.addCase(
      googleSignIn.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.status = 'success'
        state.email = action.payload.email
        state.id = action.payload.uid
      }
    )
    builder.addCase(googleSignIn.rejected, (state) => {
      state.status = 'error'
      state.email = null
      state.id = null
    })
    builder.addCase(createAcc.pending, (state) => {
      state.status = 'loading'
    })

    builder.addCase(
      createAcc.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.status = 'success'
        state.email = action.payload.email
        state.id = action.payload.uid
      }
    )

    builder.addCase(createAcc.rejected, (state, action) => {
      state.status = 'error'
      state.email = null
      state.id = null
      state.textError = action.error.message
    })
    builder.addCase(signUp.pending, (state) => {
      state.status = 'loading'
    })

    builder.addCase(signUp.fulfilled, (state, action: PayloadAction<any>) => {
      state.status = 'success'
      state.email = action.payload.email
      state.id = action.payload.uid
    })

    builder.addCase(signUp.rejected, (state, action) => {
      state.status = 'error'
      state.email = null
      state.id = null
      state.textError = action.error.message
    })
  },
})

export const { changeErrorStatus } = userSlice.actions

export default userSlice.reducer
