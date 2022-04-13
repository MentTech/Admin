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
    signOut: (state) => {
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

export const { signOut } = authSlice.actions
export default authSlice.reducer
