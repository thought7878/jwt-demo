import React, { Component } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Header from '../containers/HeaderContainer'

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
      </Wrap>
    )
  }
}

export default Main

const Wrap = styled.div``
