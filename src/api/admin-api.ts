import axiosClient from './axiosClient'
import { AdminFormData } from 'models'

export const adminApi = {
  createAdmin: async (formData: AdminFormData) => {
    return axiosClient.post('/admin', formData)
  },
}
