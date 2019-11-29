import { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../redux/actions/index';
import withAuth from '../../../hoc/WithGaurd';


class Logout extends Component {
   componentDidMount() {
      this.props.logout()
   }
   render() {
      return null
   }
}

const mapDispatchToProps = dispatch => {
   return {
      logout: () => dispatch(actions.logout())
   };
};

export default connect(null, mapDispatchToProps)(withAuth(Logout));