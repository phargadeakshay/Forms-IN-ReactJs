import React from "react";

import { Formik, Form } from "formik";
import TextField from "./TextField";
import * as Yup from "yup";

const FormikForm = () => {
  const validate = Yup.object({
    firstName: Yup.string()
      .max(20, "must be 20 charactor or less")
      .required("required")
      .matches(/\w\w\w\W\w{10}\W\w\w\w/, "Is not in correct format"),
  });
  return (
    // <div>FormilForm</div>

    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmedPassword: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log(values, "aaa");
      }}
    >
      {(formik) => (
        <div>
          <h1>SighUp Form</h1>
          <Form>
            <TextField
              label="First Name"
              name="firstName"
              type="text"
            ></TextField>
            <TextField
              label="Last Name"
              name="lastName"
              type="text"
            ></TextField>
            <TextField label="Email" name="email" type="text"></TextField>
            <TextField label="Password" name="password" type="text"></TextField>
            <TextField
              label="Confirme Password"
              name="confirmPassword"
              type="text"
            ></TextField>
            <button type="submit">Submit</button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default FormikForm;
