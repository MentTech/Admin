import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import config from 'config/mainConfig'

type AuthResponse = {
  accessToken: string
}

type SignInPayload = {
  email: string
  password: string
}

export const postSignIn = createAsyncThunk<AuthResponse, SignInPayload>(
  'auth/signIn',
  async (formData: SignInPayload) => {
    const res = await axios.post(
      `${config.BACKENDURL}/v1/auth/signIn/admin`,
      formData
    )
    const { data } = res
    return data as AuthResponse
  }
)
