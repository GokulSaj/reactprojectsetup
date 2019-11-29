import React from 'react';
import { Form, Field, withFormik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import {Button} from 'react-bootstrap';

const InnerForm = props => {
   const { errors, touched , isValid } = props;

   return (
      <Form className="login-form">
         <div>
            <div className="form-group">
               <Field
                  type="email"
                  className="form-control login-input"
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

            <div className="checkbox">
               <label>
                  <Field type="checkbox" name="remember" />
                  <span className="text-dark">Keep me signed in</span>
               </label>
            </div>
            <p>
               <Link className="text-dark" to="/register">Don't have an account?</Link>
            </p>
         </div>

         <Button variant="dark" disabled={!isValid}  type="submit" >Login in now</Button>
      </Form>
   );
};

// Wrap our form with the using withFormik HoC
const LoginForm = withFormik({
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
      props.onLoginSubmit(values.email, values.password);
      // setTimeout(() => {
      //    alert(JSON.stringify(values, null, 2));
      //    setSubmitting(false);
      //  }, 1000);
   }
})(InnerForm);

export default LoginForm;
