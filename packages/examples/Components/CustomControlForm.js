import React from 'react';
import { useForm, useField } from 'react-micro-form/Form';

const CustomControl = ({ onChange, onFocus, onBlur, value }) => {
  return (
    <div>
      {value}
      <br />
      <button
        type="button"
        onClick={() => onChange(value + 1)}
        onFocus={onFocus}
        onBlur={onBlur}
      >
        +
      </button>
      <button
        type="button"
        onClick={() => onChange(value - 1)}
        onFocus={onFocus}
        onBlur={onBlur}
      >
        -
      </button>
    </div>
  );
};

export const CustomControlForm = ({ onSubmit, onChange }) => {
  const [form, handleSubmit] = useForm(
    { onSubmit, onChange },
    {},
    { increment: 100 },
  );
  const [increment] = useField('increment', form);

  return (
    <form onSubmit={handleSubmit}>
      <CustomControl {...increment} />
    </form>
  );
};
