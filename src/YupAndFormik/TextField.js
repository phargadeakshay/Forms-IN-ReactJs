import React from "react";

import { ErrorMessage, useField } from "formik";

const TextField = (props) => {
  const [field, meta] = useField(props);
  console.log(meta);
  return (
    <div>
      <label htmlFor="{field.name">{props.label}</label>
      <input
        type="text"
        className={`${meta.touched && meta.error && "is-invalid"}`}
        {...field}
        {...props}
      />
      <ErrorMessage name={field.name} className="error"></ErrorMessage>
    </div>
  );
};

export default TextField;
