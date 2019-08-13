// code related to a specific form goes here, using the imported generic Form component
// see the SINGLE IMPLEMENTATION section for details
import React from 'react';
import styled from '@emotion/styled';
import { useField, useForm } from 'react-micro-form/Form';
import { FormControl } from '../FormControl';
import { StyledInput } from '../../StyledComponents/StyledInput';
import { StyledButton } from '../../StyledComponents/StyledButton';

import { validate } from './validate';
import { FieldNames } from './constants';

const Form = styled.form`
  width: 500px;
`;

const InputsContainer = styled.div`
  margin-bottom: 10px;
`;

export const UserContactForm = ({ onSubmit }) => {
  const [form, handleSubmit] = useForm(onSubmit, {
    validate,
  });

  const [firstName, firstNameMeta] = useField(FieldNames.firstName, form);
  const [lastName, lastNameMeta] = useField(FieldNames.lastName, form);
  const [areaCode, areaCodeMeta] = useField(FieldNames.areaCode, form);
  const [number, numberMeta] = useField(FieldNames.phoneNumber, form);

  return (
    <Form onSubmit={handleSubmit}>
      <InputsContainer>
        <FormControl meta={firstNameMeta} label="First name*">
          <StyledInput {...firstName} />
        </FormControl>

        <FormControl meta={lastNameMeta} label="Last name">
          <StyledInput {...lastName} />
        </FormControl>

        <FormControl meta={areaCodeMeta} label="Area code">
          <StyledInput {...areaCode} />
        </FormControl>

        <FormControl meta={numberMeta} label="Phone number*">
          <StyledInput {...number} />
        </FormControl>
      </InputsContainer>

      <StyledButton type="submit">Send</StyledButton>
    </Form>
  );
};
