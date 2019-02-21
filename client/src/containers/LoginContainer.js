import React from 'react'
import Login from '../components/Login'
import { connect } from 'react-redux'
import { login } from '../actions/authActions'

const LoginContainer = props => <Login {...props} />

const mapStateToProps = state => ({
  test: state
})

export default connect(
  mapStateToProps,
  { login }
)(LoginContainer)
