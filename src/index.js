import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './Redux/App'
import todoApp from './Redux/reducers'
import Routers from './component/Router'
import './index.css'

export let store = createStore(todoApp)
console.log(store.getState())

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

let rootElement = document.getElementById('root')
render(
  <Provider store={store}>
    <Routers />
  </Provider>,
  rootElement
)