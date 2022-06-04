import axiosClient from './axiosClient'

export const orderApi = {
  getAllOrders: () => {
    return axiosClient.get('/order?limit=1000')
  },
  processOrder: (orderId: string) => {
    return axiosClient.patch(`/order/${orderId}`, {
      isAccept: true,
    })
  },
  getOrderById: (orderId: string) => {
    return axiosClient.get(`/order/${orderId}`)
  },
}
