import React from 'react';
import { useForm, useField } from '@monorepo/hooks/Form';

const warn = values => {
  return {
    password:
      values.password && values.password.length < 5
        ? 'WARNING: password should be 5 chars (you still can submit)'
        : null,
  };
};

const validate = values => {
  return {
    password: !values.password
      ? 'ERROR: password is required (you cant submit now)'
      : null,
  };
};

export const WarningsForm = ({ onSubmit, onChange }) => {
  const [form, handleSubmit, { status: formStatus }] = useForm(
    { onSubmit, onChange },
    { validate, warn },
  );

  const [password, { errors, warnings, status }] = useField('password', form);

  return (
    <form onSubmit={handleSubmit}>
      <input type="password" placeholder="create password" {...password} />

      {status.warned &&
        warnings.map((warning, i) => <div key={i}>{warning}</div>)}

      {status.invalid && errors.map((error, i) => <div key={i}>{error}</div>)}

      <hr />

      <button type="submit" disabled={formStatus.hasErrors}>
        Save
      </button>
    </form>
  );
};
