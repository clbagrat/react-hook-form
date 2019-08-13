import React from 'react';
import styled from '@emotion/styled';
import { ErrorMessages } from './ErrorMessages';

const InputContainer = styled.div`
  display: flex;
  margin-bottom: 5px;
  flex-direction: column;

  &:last-child {
    margin-bottom: 0px;
  }
`;

const LabelContainer = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const LabelText = styled.span`
  color: #606060;
  margin-bottom: 5px;
  line-height: 20px;
`;

const ErrorMessagesContainer = styled.div`
  color: #f25255;
  font-size: 13px;
  margin-top: 5px;
}`;

export const FormControl = ({
  meta,
  label,
  children,
  errorsConditions = ['touched', 'submitted'],
}) => {
  return (
    <InputContainer>
      <LabelContainer>
        <LabelText>{label}</LabelText>
        {children}
      </LabelContainer>
      {meta && (
        <ErrorMessagesContainer>
          <ErrorMessages
            status={meta.status}
            messages={meta.errors}
            showConditions={errorsConditions}
          />
        </ErrorMessagesContainer>
      )}
    </InputContainer>
  );
};
