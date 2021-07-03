/**
 * The module managing the entry point of the APP
 * @module Main
 */

import React from 'react'
import ReactDOM from 'react-dom'
import '@styles/index.scss'
import Home from '@pages/Home'

/**
 * @function render
 * Render the Home component inside the element root of the index page
 */
ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
)
