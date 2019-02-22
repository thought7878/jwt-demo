import React, { Component } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Header from '../containers/HeaderContainer'
import { Switch, Route } from 'react-router'
import Home from '../containers/HomeContainer'
import Login from '../containers/LoginContainer'
import Signup from '../containers/SignupContainer'
import Alert from '../containers/AlertContainer'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0
  }

  * {
    box-sizing: border-box;
  }
`

class Main extends Component {
  componentDidMount() {
    this.props.loadCurrentUserIfNeeded()
  }

  render() {
    return (
      <Wrap>
        <GlobalStyle />
        <Header />
        <Alert />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </Wrap>
    )
  }
}

export default Main

const Wrap = styled.div``
