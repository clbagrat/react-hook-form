function createValidator(check, defaultErrorMessage) {
  return errorMessage => {
    return (value, values) => {
      return check(value, values) ? null : errorMessage || defaultErrorMessage;
    };
  };
}

export const required = createValidator(v => !!v, 'requred');

export const stringOnly = createValidator(v => !v || !/\d/.test(v));

export const numberOnly = createValidator(v => !v || /^\d*$/.test(v));

export const phoneNumber = createValidator(v => !v || /[\+\d]*$/.test(v));
