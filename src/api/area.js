import request from '@/utils/request'

export const hotCityApi = () => {
  return request({
    url: '/area/hot'
  })
}

export const CityApi = () => {
  return request({
    url: '/area/city'
  })
}
