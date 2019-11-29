import React from 'react';
import RegisterForm from './Form';
import { Spinner, Alert } from 'react-bootstrap';

const RegisterBox = props => (
   <>
      {props.registerResponse ? props.registerResponse.error ?
         <Alert key='danger' variant='danger'>
            <p className="field-invalid">{props.registerResponse.error.message}</p>
         </Alert>
         : null : null}
      {props.loading ? (
         <Spinner animation="grow" />
      ) : (
            <RegisterForm history={props.history} onRegisterSubmit={props.onRegisterSubmit} />
         )}
   </>
);

export default RegisterBox;
