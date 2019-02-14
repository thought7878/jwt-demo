import React, { Component } from 'react'
import Main from '../components/Main'
import { Router } from 'react-router'
import history from '../utils/historyUtils'

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Main />
      </Router>
    )
  }
}

export default App
