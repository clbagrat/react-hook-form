import { useRef, useEffect } from 'react';
import { isArray } from '../Helpers/fp';

const SELECT_MULTIPLE = 'select-multiple';

const isChecked = (value, fixedValue) =>
  value === fixedValue || (isArray(value) && value.includes(fixedValue));

const getValue = obj => {
  if (obj.constructor.name === 'SyntheticEvent') {
    const { target } = obj;
    const { type, selectedOptions } = target;

    return type === SELECT_MULTIPLE
      ? [...selectedOptions].map(o => o.value)
      : target.value;
  }

  return obj;
};

export function useField(fieldName, form, fixedValue, emptyValue = '') {
  const ref = useRef(null);
  const formValue = form.values[fieldName];
  const checked = isChecked(formValue, fixedValue);

  useEffect(() => {
    if (fixedValue) {
      form.registerInput(fieldName, ref.current);
    }
  });

  const props = {
    onChange: obj => {
      form.changeField(fieldName, getValue(obj));
    },
    onFocus: () => {
      form.changeFieldFocus(fieldName, true);
    },
    onBlur: () => {
      form.changeFieldFocus(fieldName, false);
    },
    checked,
    value: fixedValue || form.values[fieldName] || emptyValue,
    name: fieldName,
  };

  if (fixedValue) {
    props.ref = ref;
  }

  return [
    props,
    {
      errors: form.errors[fieldName],
      warnings: form.warnings[fieldName],
      status: form.getFieldStatus(fieldName),
    },
  ];
}
