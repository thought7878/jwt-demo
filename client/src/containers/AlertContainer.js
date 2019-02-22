import React from 'react'
import Alert from '../components/Alert'
import { connect } from 'react-redux'
import { hideAlert } from '../actions'

const AlertContainer = props => <Alert {...props} />

const mapStateToProps = state => ({
  alert: state.common.alert
})

export default connect(
  mapStateToProps,
  { hideAlert }
)(AlertContainer)
