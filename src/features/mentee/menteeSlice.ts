import { createSlice } from '@reduxjs/toolkit'
import { RootState } from 'app/store'
import { Mentee } from 'models'
import { fetchAllMentees } from './fetchAllMentees'

interface MenteeState {
  mentees: Mentee[]
  status: 'idle' | 'pending' | 'error' | 'success'
}

const initialState = {
  mentees: [],
  status: 'idle',
} as MenteeState

export const menteeSlice = createSlice({
  name: 'mentee',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllMentees.pending, (state) => {
      state.status = 'pending'
    })

    builder.addCase(fetchAllMentees.fulfilled, (state, action) => {
      state.mentees = action.payload
      state.status = 'success'
    })
  },
})

export const selecteMentees = (state: RootState) => state.mentees
export default menteeSlice.reducer
