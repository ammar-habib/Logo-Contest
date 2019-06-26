import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import asyncComponent from './AsyncComponent'

// const App = asyncComponent(() => import('../components/App'));
const Home = asyncComponent(() => import('../components/home/index'));
const Designers = asyncComponent(() => import('../components/designers/index'));
const Profile = asyncComponent(() => import('../components/profile/index'));
const Login = asyncComponent(() => import('../components/login/index'));
const Signup = asyncComponent(() => import('../components/login/signup'));
const CompleteContests = asyncComponent(() => import('../components/contests/complete-contests'));
const ContestDetail = asyncComponent(() => import('../components/contests/contest-detail'));
const StartContest = asyncComponent(() => import('../components/start-contest/index'));

class AppRoute extends Component {

  render() {
    return (
      <Switch>
        {/*<Route exact path='/' component={App} />*/}
          <Route exact path='/' component={Home} />
          <Route exact path='/designers' component={Designers} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/contests' component={CompleteContests} />
          <Route exact path='/start' component={StartContest} />
          <Route exact path='/contest-detail' component={ContestDetail} />
      </Switch>
    )
  }
}


export default AppRoute
