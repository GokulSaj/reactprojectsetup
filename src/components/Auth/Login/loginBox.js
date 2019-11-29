import React from 'react';
import LoginForm from './Form';
import { Spinner, Alert } from 'react-bootstrap';

const LoginBox = props => (
   <>
      {props.loginResponse ? props.loginResponse.error ?
         <Alert key='danger' variant='danger'>
            <p className="field-invalid">{props.loginResponse.error.message}</p>
         </Alert>
         : null : null}
      {props.loading ? (
         <Spinner animation="grow" />
      ) : (
            <LoginForm history={props.history} onLoginSubmit={props.onLoginSubmit} />
         )}
   </>
);

export default LoginBox;
