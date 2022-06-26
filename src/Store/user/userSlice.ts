import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
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
      const data = user.email
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
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)
      return res
    } catch (error) {
      console.log(error)
    }
  }
)

export const checkLogin = createAsyncThunk('user/getUserInfo', async () => {
  return () => {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const data = user.email
        return data
      }
      console.log(user, 'no user')
    })
  }
})

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
        console.log(action.payload)
        // state.email = action.payload
        // state.id = action.payload
        // console.log(state.email, state.id)
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
        console.log(action.payload, '123')
        // state.email = action.payload
        // state.id = action.payload
        // console.log(state.email, state.id)
      }
    )

    builder.addCase(createAcc.rejected, (state) => {
      state.status = 'error'
      state.email = null
      state.id = null
    })
  },
})

export default userSlice.reducer
export const { setUser, removeUser } = userSlice.actions
