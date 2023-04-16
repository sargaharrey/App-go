import React from 'react'
import { useForm } from "react-hook-form";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
type FormValues = {
    username:string;
    pasword:string;
}

const initialValues: FormValues = {
  username: '',
  pasword: '',

};

const validationSchema = Yup.object({
    username: Yup.string().required("username is required"),
    password:Yup.string().min(8,'password is required')
})

const form = (props: FormValues) => {
     const onSubmit = (values: FormValues) => {
       console.log(values);
     };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <Field type="text" id="username" name="username" />
            <ErrorMessage name="username" />
          </div>
          <div>
            <Field type="text" id="password" name="password" />
            <ErrorMessage name="password" />
          </div>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default form