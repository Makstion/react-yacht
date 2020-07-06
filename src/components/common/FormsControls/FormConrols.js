import React from "react";
import "./FormsControls.scss";
import { Field } from "redux-form";

export const FormControl = (FormControl) => ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;

  return (
    <div className={"form-control " + (hasError ? " error" : "")}>
      <div>
        {" "}
        <FormControl {...input} {...props} />
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};

// по отдельности
export const Textarea = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={"form-control " + (hasError ? " error" : "")}>
      <div>
        <textarea {...input} {...props} />
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};

export const Input = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={"form-control " + (hasError ? " error" : "")}>
      <div>
        <input {...input} {...props} />
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};

export const createField = (
  placeholder,
  name,
  validators,
  component,
  props = {},
  text = ''
) => {
  return (
    <div>
      <Field
        component={component}
        type="text"
        name={name}
        placeholder={placeholder}
        validate={validators}
        {...props}
      />
      {text}
    </div>
  );
};
