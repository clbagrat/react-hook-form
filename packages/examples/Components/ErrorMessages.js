import React, { Fragment } from 'react';
import { some } from 'react-micro-form/Helpers/fp';

export const ErrorMessages = ({ status, messages = [], showConditions }) =>
  some(state => status[state])(showConditions) && (
    <Fragment>
      {messages.map((message, i) => (
        <div key={message + i}>{message}</div>
      ))}
    </Fragment>
  );
