import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

// Handle redirects for /login, /register and /panel
const withGaurd = WrappedComponent => {
   return class extends Component {
      componentDidMount() {
         this.shouldRedirect(this.props);
      }

      shouldComponentUpdate(nextProps) {
         this.shouldRedirect(nextProps);

         return true;
      }

      shouldRedirect(props) {
         const path = props.location.pathname;

         // If we are on login/register and auth is complete, redirect to /panel
         // Otherwise redirect to /login
         if ((path === '/login' || path === '/register') && props.authStatus) {
               this.props.history.push('/home');
         } else if ((path.startsWith('/account')|| path === '/logout') && !props.authStatus) {
            this.props.history.push('/login');
         }
      }

      render() {
         return <WrappedComponent {...this.props} />;
      }
   };
};

const mapStateToProps = state => {
   return {
      authStatus: state.auth.authStatus
   };
};

export default compose(
   connect(mapStateToProps),
   withGaurd
);
