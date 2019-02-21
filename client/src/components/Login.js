import React, { Component } from 'react'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Cart from '@material-ui/core/Card'
import PropTypes from 'prop-types'

const propTypes = {
  login: PropTypes.func.isRequired
}

class Login extends Component {
  state = {
    username: '',
    password: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleClick = () => {
    this.props.login(this.state)
    this.setState({
      username: '',
      password: ''
    })
  }

  render() {
    const { username, password } = this.state

    return (
      <Wrap>
        <StyledCart>
          <Field>
            <TextField
              name="username"
              value={username}
              onChange={this.handleChange}
              label="用户名"
            />
          </Field>
          <Field>
            <TextField
              name="password"
              value={password}
              onChange={this.handleChange}
              type="password"
              label="密码"
            />
          </Field>
          <ButtonField>
            <Button
              variant="contained"
              color="secondary"
              onClick={this.handleClick}
            >
              登陆
            </Button>
          </ButtonField>
        </StyledCart>
      </Wrap>
    )
  }
}

Login.propTypes = propTypes

export default Login

const Wrap = styled.div``

const StyledCart = styled(Cart)`
  margin: 40px auto;
  max-width: 300px;
  padding: 20px;
`
const Field = styled.div`
  text-align: center;
  margin-bottom: 10px;
`
const ButtonField = styled.div`
  text-align: center;
  margin-top: 30px;
`
