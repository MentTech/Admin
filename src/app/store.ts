import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import authReducer from '../features/auth/authSlice'
import adminsReducer from 'features/admin/adminsSlice'
import { loadState, setState } from 'utils/localStorage'

const preloadedState = {
  auth: loadState(),
}

export const store = configureStore({
  reducer: { count: counterReducer, auth: authReducer, admins: adminsReducer },
  preloadedState,
})

store.subscribe(() => {
  setState(store.getState().auth)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
