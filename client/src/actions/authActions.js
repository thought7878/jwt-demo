import { historyPush } from './index'
import axios from 'axios'
import { LOGIN_URL, SIGNUP_URL } from '../constants/ApiConstants'
import { decodeJwt } from '../utils/jwtUtils'
import * as types from '../constants/ActionTypes'

export const login = data => async dispatch => {
  try {
    console.log(data)
    const res = await axios.post(LOGIN_URL, data)
    const { token } = res.data
    window.localStorage.setItem('jwtToken', token)
    const { username, admin } = decodeJwt(token)
    const isAdmin = admin
    dispatch({
      type: types.LOGIN_SUCCESS,
      currentUser: username,
      isAdmin
    })
    dispatch(historyPush('/'))
  } catch (error) {
    error.response && console.log('error', error.response.data.msg)
  }
}

export const signup = data => async dispatch => {
  try {
    const res = await axios.post(SIGNUP_URL, data)
    const { token } = res.data
    window.localStorage.setItem('jwtToken', token)
    const { username, admin } = token
    const isAdmin = admin
    dispatch({
      type: types.SIGNUP_SUCCESS,
      currentUser: username,
      isAdmin
    })
    dispatch(historyPush('/'))
  } catch (error) {
    console.log('error:', error)

    error.response && console.log('error', error.response.data.msg)
  }
}

export const logout = () => dispatch => {
  window.localStorage.removeItem('jwtToken')
  dispatch(historyPush('/'))
  dispatch({
    type: types.LOGOUT_SUCCESS
  })
}
