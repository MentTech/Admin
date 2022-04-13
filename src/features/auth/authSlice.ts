import { createSlice } from '@reduxjs/toolkit'
import { postSignIn } from './postSignIn'

interface AuthState {
  isSignedIn: boolean
  accessToken: string
  status: 'loading' | 'idle'
}

const initialState = {
  isSignedIn: false,
  accessToken: '',
  status: 'idle',
} as AuthState

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signOut: (state, action) => {
      state.isSignedIn = false
      state.accessToken = ''
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postSignIn.pending, (state) => {
      state.status = 'loading'
    })

    builder.addCase(postSignIn.fulfilled, (state, action) => {
      state.status = 'idle'
      state.accessToken = action.payload.accessToken
      state.isSignedIn = true
    })
  },
})
