import React, { Component } from 'react'
import Snackbar from '@material-ui/core/Snackbar'

class Alert extends Component {
  handleClose = () => {
    this.props.hideAlert()
  }

  render() {
    const { alert } = this.props

    return (
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        autoHideDuration={4000}
        open={Boolean(alert)}
        message={alert}
        onClose={this.handleClose}
      />
    )
  }
}

export default Alert
