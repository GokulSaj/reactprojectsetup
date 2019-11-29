import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions/index';
import withAuth from '../../../hoc/WithGaurd';

import RegisterBox from '../../../components/Auth/Register/registerBox';

class Register extends Component {

    render() {
        return (
            <div>
                <RegisterBox
                    history={this.props.history}
                    onRegisterSubmit={this.onRegisterSubmit}
                    loading={this.props.loading}
                    registerResponse={this.props.registerResponse}
                />
            </div>
        );
    }

    onRegisterSubmit = (email, password) => {
        // Dispatch auth action
        // There will be automatic redirect to panel, in HOC
        this.props.register({ email, password });
    };
}
const mapStateToProps = state => {
    return {
        registerResponse: state.auth.register.registerResponse,
        loading: state.auth.register.loading,
    };
  };
const mapDispatchToProps = dispatch => {
    return {
        register: data => dispatch(actions.register(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withAuth(Register));