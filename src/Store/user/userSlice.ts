import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
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

export const googleSignIn = createAsyncThunk('user/getUserInfo', async () => {
  const auth = getAuth()
  const provider = new GoogleAuthProvider()
  await signInWithPopup(auth, provider).then(({ user }) => {
    return user.email && user.uid
  })
})

export const signUp = createAsyncThunk(
  'user/getUserInfo',
  async (loginEmail, loginPassword) => {
    const auth = getAuth()
    await signInWithEmailAndPassword(auth, loginEmail, loginPassword).then(
      ({ user }) => {
        return user.email && user.uid
      }
    )
  }
)

export const createAcc = createAsyncThunk(
  'user/getUserInfo',
  async (email, password) => {
    const auth = getAuth()
    await createUserWithEmailAndPassword(auth, email, password).then(
      ({ user }) => {
        return user.email && user.uid
      }
    )
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
})

export const { setUser, removeUser } = userSlice.actions
