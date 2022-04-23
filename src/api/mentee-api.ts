import axiosClient from './axiosClient'

export const MenteeApi = {
  getAllMentees: () => {
    return axiosClient.get('mentee?limit=10000')
  },
}
