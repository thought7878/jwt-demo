import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import AccountCircle from '@material-ui/icons/AccountCircle'
import HomeIcon from '@material-ui/icons/Home'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import PropTypes from 'prop-types'

const propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  goto: PropTypes.func.isRequired,
  currentUser: PropTypes.string.isRequired
}

class Header extends Component {
  state = {
    anchorEl: null
  }
  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleLogout = () => {
    this.props.logout()
    this.setState({
      anchorEl: null
    })
  }

  handleMenuClose = () => {
    this.setState({
      anchorEl: null
    })
  }

  render() {
    const { anchorEl } = this.state
    const { isAuthenticated, goto, currentUser } = this.props
    const open = Boolean(anchorEl)

    const login = (
      <Login>
        <StyledButton onClick={() => goto('/login')} color="inherit">
          登陆
        </StyledButton>
        <StyledButton onClick={() => goto('/signup')} color="inherit">
          注册
        </StyledButton>
      </Login>
    )
    const logout = (
      <Logout>
        <IconButton onClick={this.handleMenu} color="inherit">
          <AccountCircle />
        </IconButton>
        <Menu anchorEl={anchorEl} open={open} onClose={this.handleMenuClose}>
          <MenuItem>{currentUser}</MenuItem>
          <MenuItem onClick={this.handleLogout}>退出</MenuItem>
        </Menu>
      </Logout>
    )

    return (
      <AppBar position="static">
        <Inner>
          <IconButton onClick={() => goto('/')} color="inherit">
            <StyledHomeIcon />
          </IconButton>
          {isAuthenticated ? logout : login}
        </Inner>
      </AppBar>
    )
  }
}

Header.propTypes = propTypes

export default Header

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  width: 700px;
  margin: 10px auto;
`
const StyledHomeIcon = styled(HomeIcon)`
  && {
    margin: 4px;
    font-size: 40px;
  }
`
const StyledButton = styled(Button)`
  && {
    line-height: 32px;
    /* height: 72px; */
  }
`

const Login = styled.div`
  display: flex;
  align-items: center;
`
const Logout = styled.div`
  display: flex;
  align-items: center;
`
