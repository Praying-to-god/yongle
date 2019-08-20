// 项目工具文件夹
// 基于 axios 做的一个封装，用来实现网络请求工具
import axios from 'axios'
import { Toast } from 'vant'

const request = axios.create({
  // baseURL: 'https://localhost:3000'
})

// 直接将 Response.data给返回出去
request.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    //请求出现异常 Toast 一个网络异常
    Toast('网络异常，请稍后重试')
    return Promise.reject(error)
  }
)

export default request
