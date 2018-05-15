import React, { Component } from 'react';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: theme.spacing.unit * 3,
  },
  title: {
    marginTop: theme.spacing.unit * 12,
    marginBottom: theme.spacing.unit * 2,
  },
  button: {
    marginTop: theme.spacing.unit,
  },
  register: {
    marginTop: theme.spacing.unit * 12,
  },
});


class Login extends Component {
  state = {
    user: '',
    pass: '',
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  onSubmit = () => {
    this.props.history.push('/inicio')
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Typography
          color="primary"
          className={classes.title}
          variant="display2"
        >
          MeUni
        </Typography>
        <TextField
          id="user"
          label="Usuário"
          autoComplete="off"
          placeholder="Ex: gabrielgene"
          InputLabelProps={{
            shrink: true,
          }}
          value={this.state.user}
          fullWidth
          onChange={this.handleChange('user')}
          margin="normal"
        />
        <TextField
          id="pass"
          label="Senha"
          autoComplete="off"
          InputLabelProps={{
            shrink: true,
          }}
          placeholder="Ex: ********"
          type="password"
          value={this.state.pass}
          fullWidth
          onChange={this.handleChange('pass')}
          margin="normal"
        />
        <Button
          className={classes.button}
          variant="raised"
          color="primary"
          fullWidth
          onClick={this.onSubmit}
        >
          Entrar
        </Button>
        <Typography
          color="secondary"
          className={classes.register}
          variant="body2"
        >
          Não possuo uma conta.
        </Typography>
      </div>
    )
  }
}

export default withStyles(styles)(Login);
