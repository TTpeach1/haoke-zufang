import request from '@/utils/request'

export const login = (username, password) => {
  return request({
    url: '/user/login',
    method: 'POST',
    data: { username, password }
  })
}
export const myCollectionApi = () => {
  return request({
    url: '/user/favorites',
    method: 'GET'
  })
}
export const myHomeApi = () => {
  return request({
    url: '/user/houses',
    method: 'GET'
  })
}
