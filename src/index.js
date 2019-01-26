import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'react-jss'

import './index.css'
import App from './page/App'
import * as serviceWorker from './serviceWorker'

const mainTheme = {
  palette: {
    type: 'dark',
    primary: '#191919',
    secondary: '#333333'
  },
  spacing: {
    unit: 8
  }
}

ReactDOM.render(
  <ThemeProvider theme={mainTheme}>
    <App/>
  </ThemeProvider>,
  document.getElementById('root')
)

serviceWorker.register()
