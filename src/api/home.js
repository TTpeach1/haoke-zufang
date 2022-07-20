import request from '@/utils/request'

export const getImgApi = () => {
  return request({
    url: '/home/swiper'
  })
}
