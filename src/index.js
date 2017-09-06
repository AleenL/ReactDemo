//import React 
import React from 'react'
import { render } from 'react-dom'

//import React-router
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

//import CSS
import './index.css'

//import component
import Backgorund from './component/WeatherComponent/Background'


render(
  <Router>
    <Route path='/' component={Backgorund} />
  </Router>,
  document.getElementById('root')
)

