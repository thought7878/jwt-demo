import { combineReducers } from 'redux'
import * as types from '../constants/ActionTypes'

const isAuthenticated = (state = false, action) => {
  switch (action.type) {
    case types.SIGNUP_SUCCESS:
    case types.LOGIN_SUCCESS:
    case types.LOAD_CURRENT_USER:
      return true
    case types.LOGOUT_SUCCESS:
      return false
    default:
      return state
  }
}

const currentUser = (state = '', action) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
    case types.SIGNUP_SUCCESS:
    case types.LOAD_CURRENT_USER:
      return action.currentUser
    case types.LOGOUT_SUCCESS:
      return ''
    default:
      return state
  }
}

const alert = (state = '', action) => {
  switch (action.type) {
    case types.ALERT:
      return action.msg
    case types.HIDE_ALERT:
      return ''
    default:
      return state
  }
}

export default combineReducers({ isAuthenticated, currentUser, alert })
