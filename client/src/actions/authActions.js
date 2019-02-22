import { historyPush } from './index'
import axios from 'axios'
import { LOGIN_URL, SIGNUP_URL } from '../constants/ApiConstants'
import { decodeJwt } from '../utils/jwtUtils'
import * as types from '../constants/ActionTypes'
import { getIsExpired } from '../utils/jwtUtils'
import { alert } from './index'

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
    error.response && dispatch(alert(error.response.data.msg))
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

    error.response && dispatch(alert(error.response.data.msg))
  }
}

export const logout = () => dispatch => {
  window.localStorage.removeItem('jwtToken')
  dispatch(historyPush('/'))
  dispatch({
    type: types.LOGOUT_SUCCESS
  })
}

export const loadCurrentUserIfNeeded = () => dispatch => {
  const token = window.localStorage.getItem('jwtToken')
  if (token) {
    if (getIsExpired(token)) {
      window.localStorage.removeItem('jwtToken')
      dispatch({ type: types.LOGOUT_SUCCESS })
      historyPush('/login')
      return dispatch(alert('登陆失效，请重新登陆'))
    } else {
      const { username, admin } = decodeJwt(token)
      dispatch({
        type: types.LOAD_CURRENT_USER,
        currentUser: username,
        isAdmin: admin
      })
    }
  }
}
