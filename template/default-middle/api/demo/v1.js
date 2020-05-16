import axios from '@/utils/axios'

// 查询员工获奖记录 列表
export function list (query) {
  return axios({
    url: '/demo/v1/list',
    method: 'get',
    params: query
  })
}
