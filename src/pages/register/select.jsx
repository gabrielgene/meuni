// @flow

import React from 'react';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';


export const SelectField = (props) => {
  const {
    label, form, field, id, disabled,
    options, noEmptyItem, selectProps,
  } = props;
  console.log({props});

  const { name } = field;
  const value = form.values['course'];
  console.log({name});
  console.log({value});

  const handleChange = (value) => {
    console.log('value: ', value);
    form.setFieldValue(name, value);
  };

  return (
    <div>
      <FormControl>
        <InputLabel htmlFor="age-simple">Age</InputLabel>
        <Select
          value={value}
          onChange={this.handleChange}
          inputProps={{
            name: 'course',
            id: 'age-simple',
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      {/* <FormControl>
        <InputLabel shrink htmlFor={name}> {label} </InputLabel>
        <Select
          {...props}
          value={value}
          inputProps={{
            name,
            id: name,
          }}
          fullWidth
          onChange={this.handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
          {options.map(option => (
            <MenuItem key={option.label} value={option.value}> {option.label} </MenuItem>
          ))}
        </Select>
        <FormHelperText>Label + placeholder</FormHelperText>
      </FormControl> */}
    </div>
  );
};

export default SelectField;
