import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Field } from 'formik';
import InputField from './input';
import SelectField from './select';

import { withIndexStyle } from './styles';

const suggestions = [
  { label: 'Ciência da Computação', value: 'ciencia-da-computacao' },
  { label: 'Direito', value: 'direito' },
];

const FirstStep = ({ classes }) => (
  <div className={classes.formWrapper}>
    <Field
      id="user"
      name="user"
      label="Usuário"
      autoComplete="off"
      placeholder="Ex: gabrielgene"
      component={InputField}
      className={classes.formField}
      InputLabelProps={{
        shrink: true
      }}
      fullWidth
      margin="normal"
    />
    <Field
      id="pass"
      name="password"
      label="Senha"
      autoComplete="off"
      placeholder="Ex: ********"
      type="password"
      component={InputField}
      className={classes.formField}
      InputLabelProps={{
        shrink: true
      }}
      fullWidth
      margin="normal"
    />
    <Field
      name="course"
      label="Curso"
      className={classes.selectCourse}
      options={suggestions}
      component={SelectField}
      fullWidth
      placeholder="Ex: Ciência da Computação"
    />
  </div>
);

export default withIndexStyle(FirstStep);
