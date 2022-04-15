import { createSlice } from '@reduxjs/toolkit'
import { Admin } from 'models'
import { fetchAdmins } from './fetchAdmins'
import { RootState } from 'app/store'

export interface AdminsState {
  admins: Admin[]
  status: 'idle' | 'pending' | 'succeeded' | 'failed'
  error: string
}

const initialState = {
  admins: [],
  status: 'idle',
  error: '',
} as AdminsState

export const adminsSlice = createSlice({
  name: 'admins',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchAdmins.pending, (state) => {
      state.status = 'pending'
    })

    builder.addCase(fetchAdmins.fulfilled, (state, action) => {
      state.admins.concat(action.payload)
      state.status = 'succeeded'
    })

    builder.addCase(fetchAdmins.rejected, (state, action) => {
      state.status = 'failed'
      state.error = action.payload?.message as string
    })
  },
})

export const selectAdmins = (state: RootState) => state.admins

export default adminsSlice.reducer
