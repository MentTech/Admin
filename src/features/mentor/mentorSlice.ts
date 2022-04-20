import { createSlice } from '@reduxjs/toolkit'
import { Mentor } from 'models'
import { fetchMentors } from 'features/mentor/fetchMentors'

interface MentorState {
  mentors: Mentor[]
}

const initialState = {
  mentors: [],
} as MentorState

export const mentorSlice = createSlice({
  name: 'mentors',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMentors.fulfilled, (state, action) => {
      state.mentors = action.payload
    })
  },
})

export const selectMentors = (state: any) => state.mentors

export default mentorSlice.reducer
