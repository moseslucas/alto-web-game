// inside src/index.js
import React, {Component} from 'react'
import {render} from 'react-dom'
import {HashRouter as Router} from 'react-router-dom'
import Routes from './routes'

const App = () => {
  return (
    <Router>
      <Routes />
    </Router>
  )
}

render(
 <App/>,
 document.getElementById('root')
)
