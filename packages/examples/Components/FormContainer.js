import React, { useState } from 'react';
import styled from '@emotion/styled';

const StyledContrainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  form {
    width: 500px;
    margin-right: 50px;
  }
`;

const StyledPre = styled.pre`
  color: #ccc;
`;

export const FormContainer = ({ children }) => {
  const [values, setValues] = useState({});

  return (
    <StyledContrainer>
      {children(newValues => setValues(newValues))}
      <StyledPre>{JSON.stringify(values, null, 2)}</StyledPre>
    </StyledContrainer>
  );
};
