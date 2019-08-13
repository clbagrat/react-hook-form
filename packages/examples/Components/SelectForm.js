import React from 'react';
import { useForm, useField } from 'react-micro-form/Form';

export const SelectForm = ({ onSubmit, onChange }) => {
  const [form, handleSubmit] = useForm({ onSubmit, onChange });
  const [fruit] = useField('fruit', form);
  const [vegie] = useField('vegie', form, null, []);

  return (
    <form onSubmit={handleSubmit}>
      <select {...fruit}>
        <option value="" disabled>
          Select a fruit
        </option>
        <option value="banana">Banana</option>
        <option value="orange">Orange</option>
      </select>
      <hr />
      <select multiple {...vegie}>
        <option value="tomato">Tomato</option>
        <option value="potato">Potato</option>
        <option value="cucumber">Cucumber</option>
      </select>
      <hr />
      <button type="submit">Send</button>
    </form>
  );
};
