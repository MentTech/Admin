import axiosClient from './axiosClient'

export const mentorApi = {
  getAllMentors: () => {
    return axiosClient.get('/mentor')
  },
}
