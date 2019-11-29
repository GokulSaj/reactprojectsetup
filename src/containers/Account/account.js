import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Jumbotron, Button } from 'react-bootstrap'

// import * as actions from '../../../redux/actions/index';
import withAuth from '../../hoc/WithGaurd';


class Account extends Component {
   render() {
      return (
        <Jumbotron>
        <h1>Account</h1>
        <p>
            This is a simple hero unit, a simple jumbotron-style component for calling
            extra attention to featured content or information.
         </p>
        <p>
            <Button variant="primary">Learn more</Button>
        </p>
    </Jumbotron>
      );
   }
}

const mapStateToProps = state => {
    return {
    };
  };

const mapDispatchToProps = dispatch => {
   return {
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(withAuth(Account));