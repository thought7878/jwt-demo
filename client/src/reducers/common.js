import { combineReducers } from 'redux'

const isAuthenticated = (state = false, action) => {
  switch (action.type) {
    default:
      return false
  }
}

export default combineReducers({ isAuthenticated })
