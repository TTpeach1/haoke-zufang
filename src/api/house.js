import request from '@/utils/request'
/**
 *
 * @param {*} id
 * @returns 根据房屋id获取房屋具体信息
 */
export const getCententApi = (id) => {
  return request({
    url: `/houses/${id}`
  })
}
/**
 *
 * @param {*} cityld
 * @returns 根据条件查询房屋
 */
export const getCityValApi = (cityld) => {
  return request({
    url: '/houses',
    query: {
      cityld
    }
  })
}
