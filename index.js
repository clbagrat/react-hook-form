import React from 'react'
import { render } from 'react-dom'
import App from './src'

const renderApp = AppComponent =>
  render(<AppComponent />, document.getElementById('react-root'))

renderApp(App);