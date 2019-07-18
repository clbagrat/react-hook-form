import React from 'react';
import { useForm, useField } from '@monorepo/hooks/Form';

export const CheckRadioForm = ({ onSubmit, onChange }) => {
  const [form, handleSubmit] = useForm({ onSubmit, onChange }, {});
  const [singleCheckbox] = useField('singleCheckbox', form, 'yes!');
  const [checkbox1] = useField('groupedCheckbox', form, 'checkbox one');
  const [checkbox2] = useField('groupedCheckbox', form, 'checkbox two');
  const [radio1] = useField('groupedRadio', form, 'radio one');
  const [radio2] = useField('groupedRadio', form, 'radio two');

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input type="checkbox" {...singleCheckbox} />
        Single checkbox
      </label>
      <hr />
      <label>
        <input type="checkbox" {...checkbox1} />
        Checkbox one
      </label>
      <br />
      <label>
        <input type="checkbox" {...checkbox2} />
        Checkbox two
      </label>
      <hr />
      <label>
        <input type="radio" {...radio1} />
        Radio one
      </label>
      <br />
      <label>
        <input type="radio" {...radio2} />
        Radio two
      </label>
      <hr />
      <button type="submit">Send</button>
    </form>
  );
};
