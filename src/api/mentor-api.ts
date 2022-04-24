import axiosClient from './axiosClient'
import { Mentor } from 'models'

export const mentorApi = {
  getAllMentors: () => {
    return axiosClient.get('/mentor')
  },
  getMentorById: (id: string) => {
    return axiosClient.get(`/mentor/${id}/admin`)
  },
  createMentor: (mentor: Mentor) => {
    return axiosClient.post('/mentor', mentor)
  },
  updateMentor: (mentor: Mentor) => {
    return axiosClient.patch(`/mentor/${mentor.id}`, mentor)
  },
  deleteMentor: (id: string) => {
    return axiosClient.delete(`/mentor/${id}`)
  },
  getMentorCandidates: () => {
    return axiosClient.get(`/mentor?pending=false`)
  },
  acceptCandidate: (id: string) => {
    return axiosClient.post(`/mentor/${id}/accept`)
  },
}