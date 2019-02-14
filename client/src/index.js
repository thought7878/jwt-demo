import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import thunk from 'redux-thunk'

let middlewares = [thunk]
if (process.env.NODE_ENV !== 'production') {
  const { logger } = require(`redux-logger`)
  middlewares = [...middlewares, logger]
}

const store = createStore(reducer, applyMiddleware(...middlewares))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
