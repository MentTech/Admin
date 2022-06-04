import { createAsyncThunk } from '@reduxjs/toolkit'
import { orderApi } from 'api'
import { OrderTransaction } from 'models'

export const processOrder = createAsyncThunk<
  OrderTransaction,
  string,
  {
    rejectValue: { message: string }
  }
>('order/processOrder', async (orderId: string, thunkApi) => {
  try {
    const res = await orderApi.processOrder(orderId)
    return res.data as OrderTransaction
  } catch (err) {
    return thunkApi.rejectWithValue({ message: "Can't process order" })
  }
})
