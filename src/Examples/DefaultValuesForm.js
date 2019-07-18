import React from 'react';
import { useForm, useField } from '@monorepo/hooks/Form';

export const DefaultValuesForm = ({ onSubmit, onChange }) => {
  const [form, handleSubmit, , resetValues] = useForm(
    { onSubmit, onChange },
    {},
    {
      input1: 'this',
      input2: 'is',
      input3: 'default',
      input4: 'value',
    },
  );

  const [input1] = useField('input1', form);
  const [input2] = useField('input2', form);
  const [input3] = useField('input3', form);
  const [input4] = useField('input4', form);

  return (
    <form onSubmit={handleSubmit}>
      <input {...input1} />
      <br />
      <input {...input2} />
      <br />
      <input {...input3} />
      <br />
      <input {...input4} />
      <hr />
      <button type="submit">Send</button>

      <button type="button" onClick={() => resetValues()}>
        Reset to defaults
      </button>

      <button type="button" onClick={() => resetValues({})}>
        Reset
      </button>
    </form>
  );
};
