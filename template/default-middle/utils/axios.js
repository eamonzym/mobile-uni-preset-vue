/**
 luch-request对象封装
 对象初始化
 配置拦截器
 */
import LuchRequest from 'luch-request'
import config from '@/config'

const BASE_URL = config.BASE_URL
const HttpRequest = new LuchRequest()

HttpRequest.setConfig((config) => {
  config.baseUrl = BASE_URL
  config.header = {
    ...config.header
  }
  return config
})

// 请求拦截器
HttpRequest.interceptor.request((config, cancel) => { /* 请求之前拦截器 */
  console.log('httpRequest request config =', config)
  config.header = {
    ...config.header
  }
  /*
    if (!token) { // 如果token不存在，调用cancel 会取消本次请求，但是该函数的catch() 仍会执行
      cancel('token 不存在') // 接收一个参数，会传给catch((err) => {}) err.errMsg === 'token 不存在'
    }
    */
  return config
})

// 响应拦截器
HttpRequest.interceptor.response((response) => { /* 请求之后拦截器 */
  console.log('httpRequest response = ', response)

  if (response.statusCode !== 200) { // 服务端返回的状态码不等于200，则reject()
    return Promise.reject(response)
  }
  // if (response.config.custom.verification) { // 演示自定义参数的作用
  //   return response.data
  // }
  return response
}, error => { // 请求错误做点什么
  return Promise.reject(error)
})

export default HttpRequest
