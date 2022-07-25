import request from '@/utils/request'

export const hotCityApi = () => {
  return request({
    url: '/area/hot'
  })
}

export const getCityApi = () => {
  return request({
    url: '/area/city',
    params: { level: 1 }
  })
}

export const getHotCityApi = () => {
  return request({
    url: '/area/hot'
  })
}
/**
 *
 * @param {*} name
 * @returns 获取城市对应id
 */
export const getCityIdApi = (name) => {
  return request({
    url: `/area/info?name=${name}`
  })
}
