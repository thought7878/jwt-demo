import React, { Component } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Header from '../containers/HeaderContainer'
import { Switch, Route } from 'react-router'
import Home from '../components/Home'
import Login from '../components/Login'
import Signup from '../components/Signup'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0
  }

  * {
    box-sizing: border-box;
  }
`

class Main extends Component {
  render() {
    return (
      <Wrap>
        <GlobalStyle />
        <Header />
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
