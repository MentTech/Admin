import axiosClient from './axiosClient'
import { AdminFormData } from 'models'

export const adminApi = {
  createAdmin: async (formData: AdminFormData) => {
    return axiosClient.post('/admin', formData)
  },
  fetchAdminById: async (id: number) => {
    return axiosClient.get(`/admin/${id}`)
  },
  updateAdmin: async (id: number, formData: AdminFormData) => {
    return axiosClient.patch(`/admin/${id}`, formData)
  },
}
