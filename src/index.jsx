import React, { Fragment } from 'react';
import { Global, css } from '@emotion/core';
import styled from '@emotion/styled';
import {
  DefaultValuesForm,
  CheckRadioForm,
  SelectForm,
  CustomControlForm,
  WarningsForm,
  UserContactForm
} from './Examples';
import { ExampleFormContainer } from './Form/ExampleFormContainer';
import { ContentToggler } from './ContentToggler/ContentToggler';

const globalStyles = css`
  body {
    font-family: sans-serif;
  }
`;

const FormHeader = styled.h1`
  color: hotpink;
`;

const FormSubHeader = styled.h2`
  color: hotpink;
`;

const onSubmit = val => {
  console.log(val);
};

const App = () => {
  const ExampleForms = {
    'Default values': DefaultValuesForm,
    'Checkboxes and radios': CheckRadioForm,
    'Select fields': SelectForm,
    'Custom control': CustomControlForm,
    'Warnings/validatons': WarningsForm,
  };

  return (
    <Fragment>
      <Global styles={globalStyles} />
      <FormHeader> fdf Update Your Details</FormHeader>
      <UserContactForm onSubmit={onSubmit} />

      <ContentToggler
        label="Show other examples"
        labelNegative="Hide other examples"
      >
        {Object.entries(ExampleForms).map(([title, FormComponent]) => (
          <Fragment key={title}>
            <FormSubHeader>{title}</FormSubHeader>
            <ExampleFormContainer>
              {onChange => (
                <FormComponent onSubmit={onSubmit} onChange={onChange} />
              )}
            </ExampleFormContainer>
          </Fragment>
        ))}
      </ContentToggler>
    </Fragment>
  );
};

export default App;
