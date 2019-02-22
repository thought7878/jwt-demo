import React, { Component } from 'react'
import Main from '../components/Main'
import { Router } from 'react-router'
import history from '../utils/historyUtils'
import { connect } from 'react-redux'
import { loadCurrentUserIfNeeded } from '../actions/authActions'

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Main {...this.props} />
      </Router>
    )
  }
}

export default connect(
  null,
  { loadCurrentUserIfNeeded }
)(App)
