import { withIndexStyle } from './styles';

const FirstStep = () => (
  <div className={classes.formWrapper}>
    <div className={classes.avatar} />
    <TextField
      className={classes.formField}
      id="user"
      label="Usuário"
      autoComplete="off"
      placeholder="Ex: gabrielgene"
      InputLabelProps={{
        shrink: true
      }}
      fullWidth
      onChange={this.handleChange("user")}
      margin="normal"
    />
    <TextField
      className={classes.formField}
      id="pass"
      label="Senha"
      autoComplete="off"
      InputLabelProps={{
        shrink: true
      }}
      placeholder="Ex: ********"
      type="password"
      fullWidth
      onChange={this.handleChange("pass")}
      margin="normal"
    />
    {/* <Select
      className={classes.selectCourse}
      classes={classes}
      options={suggestions}
      components={components}
      styles={selectStyles}
      textFieldProps={{
        label: "Curso",
        InputLabelProps: {
          shrink: true
        }
      }}
      placeholder="Ex: Ciência da Computação"
      onChange={this.handleSelectChange}
    /> */}
  </div>
);

export default withIndexStyle(FirstStep);
