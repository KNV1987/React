import React from "react";
import { Field } from "redux-form";
import styles from "./FormsControls.module.css";

export const Textarea = ({ input, meta: { touched, error }, ...props }) => {
  const hasError = touched && error;
  return (
    <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
      <textarea {...input} {...props} />
      <div>{hasError && <span>{error}</span>}</div>
    </div>
  );
};

export const Input = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
      <input {...input} {...props} />
      <div>{hasError && <span>{meta.error}</span>}</div>
    </div>
  );
};

export const createField = ({
  placeholder,
  name,
  validators,
  component,
  props = {},
  text = "",
}) => {
  return (
    <div>
      <Field
        placeholder={placeholder}
        name={name}
        validate={validators}
        component={component}
        {...props}
      />{" "}
      {text}
    </div>
  );
};
