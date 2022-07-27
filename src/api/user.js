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
/**
 *
 * @param {*} id
 * @returns 添加收藏
 */
export const getFavoritesApi = (id) => {
  return request({
    url: `/user/favorites/${id}`,
    method: 'POST'
  })
}
/**
 *
 * @param {*} id
 * @returns 取消收藏
 */
export const delFavoritesApi = (id) => {
  return request({
    url: `/user/favorites/${id}`,
    method: 'DELETE'
  })
}
/**
 *
 * @param {*} id
 * @returns 判断是否收藏
 */
export const isFavoritesApi = (id) => {
  return request({
    url: `/user/favorites/${id}`,
    method: 'GET'
  })
}
/**
 *
 * @param {*} data
 * @returns 发布房源
 */
export const sentHomeApi = (data) => {
  return request({
    url: '/user/houses',
    method: 'POST',
    data
  })
}
