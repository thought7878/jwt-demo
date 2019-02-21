import React, { Component } from 'react'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import PropTypes from 'prop-types'

class Signup extends Component {
  state = {
    username: '',
    password: '',
    passwordConfirm: ''
  }

  handleChange = e => {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleClick = () => {
    this.props.signup(this.state)
    this.setState({
      username: '',
      password: '',
      passwordConfirm: ''
    })
  }

  render() {
    const { username, password, passwordConfirm } = this.state

    return (
      <Wrap>
        <StyledCard>
          <Field>
            <TextField
              name="username"
              value={username}
              label="用户名"
              onChange={this.handleChange}
            />
          </Field>
          <Field>
            <TextField
              name="password"
              value={password}
              type="password"
              label="密码"
              onChange={this.handleChange}
            />
          </Field>
          <Field>
            <TextField
              name="passwordConfirm"
              value={passwordConfirm}
              type="password"
              label="再次输入密码"
              onChange={this.handleChange}
            />
          </Field>
          <ButtonField>
            <Button
              variant="contained"
              color="secondary"
              onClick={this.handleClick}
            >
              注册
            </Button>
          </ButtonField>
        </StyledCard>
      </Wrap>
    )
  }
}

Signup.propTypes = {
  signup: PropTypes.func.isRequired
}

export default Signup

const Wrap = styled.div``
const Field = styled.div`
  text-align: center;
  margin-bottom: 10px;
`
const ButtonField = styled.div`
  text-align: center;
  margin-top: 30px;
`
const StyledCard = styled(Card)`
  margin: 40px auto;
  max-width: 300px;
  padding: 20px;
`
