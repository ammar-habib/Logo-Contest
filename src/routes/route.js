import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import asyncComponent from './AsyncComponent'

const App = asyncComponent(() => import('../components/App'));

class AppRoute extends Component {

  render() {
    return (
      <Switch>
        <Route exact path='/' component={App} />
      </Switch>
    )
  }
}

export default AppRoute
