import axiosClient from './axiosClient'
import { GiftCode } from 'models'

export const giftCodeApi = {
  getGiftCodes: () => {
    return axiosClient.get('/transaction/balance')
  },
  createGiftCode: (giftCode: GiftCode) => {
    return axiosClient.post('/transaction/card', giftCode)
  },
}
