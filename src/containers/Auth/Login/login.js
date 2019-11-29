import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions/index';
import withAuth from '../../../hoc/WithGaurd';

import LoginBox from '../../../components/Auth/Login/loginBox';

class Login extends Component {

    render() {
        return (
            <div>
                <LoginBox
                    history={this.props.history}
                    onLoginSubmit={this.onLoginSubmit}
                    loading={this.props.loading}
                    loginResponse={this.props.loginResponse}
                />
            </div>
        );
    }

    onLoginSubmit = (email, password) => {
        // Dispatch auth action
        // There will be automatic redirect to panel, in HOC
        this.props.login({ email, password })
    };
}

const mapStateToProps = state => {
    return {
        loginResponse: state.auth.login.loginResponse,
        loading: state.auth.login.loading,
    };
  };
const mapDispatchToProps = dispatch => {
    return {
        login: data => dispatch(actions.login(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withAuth(Login));