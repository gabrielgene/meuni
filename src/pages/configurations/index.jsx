import React from 'react';
import Button from 'material-ui/Button';
import Topbar from '../../components/topbar';
import Avatar from 'material-ui/Avatar';
import TextField from 'material-ui/TextField';
import { withStyles } from 'material-ui/styles';

const styles = {
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
  formWrapper: {
    marginTop: 56,
    padding: 24,
  },
  avatar: {
    width: 80,
    height: 80,
  },
  button: {
    marginTop: 16,
  }
};

const Configurations = ({ classes, history }) => (
  <div>
    <Topbar menu title="Configurações" />
    <div className={classes.formWrapper}>
      <Avatar className={classes.avatar} src="https://avatars3.githubusercontent.com/u/19671668?s=460&v=4" alt="avatar" />
      <TextField
        id="avatarUrl"
        label="Url da imagem de perfil"
        autoComplete="off"
        placeholder="Ex: http://minhaimagemdeperfil.jpg"
        InputLabelProps={{
          shrink: true,
        }}
        fullWidth
        margin="normal"
      />
      <TextField
        id="Name"
        label="Nome"
        autoComplete="off"
        InputLabelProps={{
          shrink: true,
        }}
        placeholder="João"
        fullWidth
        margin="normal"
      />
      <TextField
        id="description"
        label="Descrição"
        autoComplete="off"
        placeholder="Ex: Gente fina"
        InputLabelProps={{
          shrink: true,
        }}
        fullWidth
        margin="normal"
      />
      <Button
        className={classes.button}
        variant="raised"
        color="primary"
        fullWidth
        onClick={() => history.push('/inicio')}
      >
        Salvar
      </Button>
    </div>
  </div>
)

export default withStyles(styles)(Configurations);
