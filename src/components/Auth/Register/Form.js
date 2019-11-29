import React from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import {Button} from 'react-bootstrap';

const InnerForm = props => {
   const { errors, touched , isValid } = props;

   return (
      <Form className="register-form">
         <div>
            <div className="form-group">
               <Field
                  type="email"
                  className="form-control register-input"
                  name="email"
                  placeholder="Email"
               />
               {touched.email && errors.email && <p className="field-invalid">{errors.email}</p>}
            </div>

            <div className="form-group">
               <Field
                  type="password"
                  className="form-control password-input"
                  name="password"
                  placeholder="Password"
               />
               {touched.password && errors.password && <p className="field-invalid">{errors.password}</p>}
            </div>
         </div>

         <Button variant="dark" disabled={!isValid}  type="submit" >Register</Button>
      </Form>
   );
};

// Wrap our form with the using withFormik HoC
const RegisterForm = withFormik({
   // Transform outer props into form values
   mapPropsToValues: props => ({ email: '', password: '' }),

   // Add a custom validation function (this can be async too!)
   validationSchema: Yup.object().shape({
      email: Yup.string()
         .required('Email is required')
         .email('This is not a valid email'),
      password: Yup.string()
         .required('Password is required')
         .min(6, 'Your password has to be at least 6 characters')
   }),

   // Submission handler
   handleSubmit: (values, { props, setSubmitting }) => {
      props.onRegisterSubmit(values.email, values.password);
      setTimeout(() => {
         alert(JSON.stringify(values, null, 2));
         setSubmitting(false);
       }, 1000);
   }
})(InnerForm);

export default RegisterForm;