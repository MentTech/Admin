import axiosClient from './axiosClient'

export const MenteeApi = {
  getAllMentees: () => {
    return axiosClient.get('mentee?limit=10000')
  },
  topUpMentee: (userId: string, amount: number) => {
    return axiosClient.post('transaction/topup', {
      userId,
      amount,
    })
  },
}
