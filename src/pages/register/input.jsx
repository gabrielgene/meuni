// @flow

import React from 'react';
import TextField from '@material-ui/core/TextField';

export const InputField = (props) => {
  const { form, field } = props;
  const { name } = field;


  const onChange = (e) => {
    console.log('onchange e', e);
    form.setFieldValue(field.name, e.target.value);
  };

  return (
    <TextField
      {...props}
      onChange={onChange}
    />
  );
};

export default InputField;
