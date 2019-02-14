import React from 'react'
import Header from '../components/Header'
import { connect } from 'react-redux'
import { goto } from '../actions'

const HeaderContainer = props => <Header {...props} />

const mapStateToProps = state => ({
  isAuthenticated: state.common.isAuthenticated
})

export default connect(
  mapStateToProps,
  { goto }
)(HeaderContainer)
