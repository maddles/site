import React, { Component } from 'react'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import createHistory from 'history/createBrowserHistory'
import thunk from 'redux-thunk'
import { Route } from 'react-router'
import { HomeContainer } from 'containers'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

import reducers from 'reducers'
import routes from 'config/routes'

const history = createHistory()
const middleware = routerMiddleware(history)

const store = createStore(reducers, applyMiddleware(middleware), applyMiddleware(thunk))

export default class RoutesRoot extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <Route path="/" component={HomeContainer}/>
          </div>
        </ConnectedRouter>
      </Provider>
    )
  }
}