import request from '@/utils/request'

export const getImgApi = () => {
  return request({
    url: '/home/swiper'
  })
}
/**
 *
 * @param {*} area
 * @returns 获取租房小组信息
 */
export const getGroupApi = (area) => {
  return request({
    url: '/home/groups',
    query: {
      area
    }
  })
}
