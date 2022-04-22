import { createSlice } from '@reduxjs/toolkit'
import { RootState } from 'app/store'
import { Mentor } from 'models'
import { fetchCandidates } from './fetchCandidates'

export interface CandidateSlice {
  candidates: Mentor[]
  status: 'idle' | 'pending' | 'success' | 'error'
}

const initialState = {
  candidates: [],
  status: 'idle',
} as CandidateSlice

export const candidateSlice = createSlice({
  name: 'candidate',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCandidates.pending, (state, action) => {
      state.status = 'pending'
    })
    builder.addCase(fetchCandidates.fulfilled, (state, action) => {
      state.candidates = action.payload
      state.status = 'success'
    })
  },
})

export const selectCandidates = (state: RootState) => state.candidates

export default candidateSlice.reducer
