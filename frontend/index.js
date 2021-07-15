import React from 'react'
import ReactDOM from 'react-dom'

import Header from './header'

import './styles.css'

ReactDOM.hydrate(<Header />, document.querySelector('[data-js-header]'))
