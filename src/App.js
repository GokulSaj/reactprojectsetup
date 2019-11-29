import React, { Component } from 'react';
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from 'react-redux';

import * as actions from './redux/actions/index';
import Layout from './components/Layout/layout'
import Login from './containers/Auth/Login/login';
import Register from './containers/Auth/Register/register';
import Account from './containers/Account/account';
import Logout from './containers/Auth/Logout/logout';
import Home from './containers/Home/home';
 
class App extends Component {
  componentDidMount(){
    this.props.checkUserLogined();
  }
  render() { 
    return (
      <Layout authStatus={this.props.authStatus}>
      <Switch>
        <Route path="/logout" component={Logout} />
        <Route path="/account" component={Account} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route exact path="/home" component={Home} />
        <Route component={Home} />
      </Switch>
    </Layout>
    );
  }
}
const mapStateToProps = state => {
  return {
    authStatus: state.auth.authStatus,
  };
};
const mapDispatchToProps = dispatch => {
  return {
      checkUserLogined: data => dispatch(actions.checkUserLogined())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
