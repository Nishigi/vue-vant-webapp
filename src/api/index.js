import axios from '@/utils/axios'

export const fetchGoodList = params => axios({ url: '/getGoodList', method: 'get', params })
export const fetchAllCates = params => axios({ url: '/getAllCates', method: 'get', params })
export const fetchGoodInfo = params => axios({ url: '/getGoodInfo', method: 'get', params })
export const fetchRegister = data => axios({ url: '/user/register', method: 'post', data })
export const fetchLogin = data => axios({ url: '/user/login', method: 'post', data })

export const fetchCartAdd = data => axios({ url: '/cart/add', method: 'post', data })
export const fetchCartList = params => axios({ url: '/cart/list', method: 'get', params })
export const fetchCartDel = params => axios({ url: '/cart/del', method: 'get', params })
export const fetchCartUpdate = params => axios({ url: '/cart/update', method: 'get', params })
export const fetchCartSubmit = data => axios({ url: '/cart/submit', method: 'post', data })

export default {
  fetchGoodList,
  fetchAllCates,
  fetchGoodInfo,
  fetchRegister,
  fetchLogin,
  fetchCartAdd,
  fetchCartList,
  fetchCartDel,
  fetchCartUpdate,
  fetchCartSubmit
}

// import api from '@/api'
// api.fetchGoodList()
// import { fetchGoodList } from '@/api'
// fetchGoodList()
