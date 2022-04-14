import { createSlice } from '@reduxjs/toolkit'
import { RootState } from 'app/store'
import { postSignIn } from './postSignIn'

interface AuthState {
  isSignedIn: boolean
  accessToken: string
  status: 'idle' | 'loading' | 'done'
  error: string | undefined
}

const initialState = {
  isSignedIn: false,
  accessToken: '',
  status: 'idle',
  error: '',
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
      state.status = 'done'
      state.accessToken = action.payload.accessToken
      state.isSignedIn = true
    })

    builder.addCase(postSignIn.rejected, (state, { payload }) => {
      state.status = 'done'
      state.error = payload?.message
    })
  },
})

export const selectAuth = (state: RootState) => state.auth
export const { signOut } = authSlice.actions
export default authSlice.reducer
