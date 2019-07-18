import React, { useState, Fragment } from 'react';
import { StyledButtonInline } from '../StyledComponents/StyledButtonInline';

export const ContentToggler = ({ label, labelNegative, children }) => {
  const [enabled, setEnabled] = useState(false);

  return (
    <Fragment>
      <div>
        <StyledButtonInline onClick={() => setEnabled(!enabled)}>
          {enabled ? labelNegative : label}
        </StyledButtonInline>
      </div>
      {enabled && children}
    </Fragment>
  );
};
