import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { rejects } from 'assert'
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
}

export const googleSignIn = createAsyncThunk('user/googleSignIn', async () => {
  try {
    const auth = getAuth()
    const provider = new GoogleAuthProvider()
    await signInWithPopup(auth, provider).then(({ user }) => {
      const data = user
      return data
    })
  } catch (error) {
    return error
  }
})

export const signUp = createAsyncThunk(
  'user/getUserInfo',
  async ({
    loginEmail,
    loginPassword,
  }: {
    loginEmail: string
    loginPassword: string
  }) => {
    const auth = getAuth()
    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      .then(({ user }) => {
        console.log(user)
        return user
      })
      .catch((error) => {
        alert(error.message)
      })
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
    setUser(state, action) {
      state.email = action.payload.email
      state.id = action.payload.id
    },
    removeUser(state) {
      state.email = null
      state.id = null
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
        console.log(googleSignIn.rejected, 'googleSignIn.ff')
      }
    )
    builder.addCase(googleSignIn.rejected, (state) => {
      state.status = 'error'
      state.email = null
      state.id = null
      console.log(googleSignIn.rejected, 'googleSignIn.rejected')
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

    builder.addCase(createAcc.rejected, (state) => {
      state.status = 'error'
      state.email = null
      state.id = null
    })
  },
})

export const { setUser, removeUser } = userSlice.actions

export default userSlice.reducer
