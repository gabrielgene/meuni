import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Cookies from 'js-cookie';

import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

// import AppSearch from '../app-search';

const styles = theme => ({
  bar: {
    display: 'flex',
    justifyContent: 'center',
  },
  menuList: {
    width: 250,
  },
  logo: {
    fontFamily: 'Jua',
  },
  actions: {
    width: '100%',
    textAlign: 'end',
  },
  bootstrapRoot: {
    padding: 0,
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
  },
  bootstrapInput: {
    borderRadius: 4,
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 12px',
    width: 'calc(100% - 24px)',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
});

class Topbar extends Component {
  state = {
    open: false,
  }

  toggleDrawer = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  render() {
    const {
      back,
      menu,
      title,
      classes,
      history,
      withoutNotification,
    } = this.props;
    const { open } = this.state;
    return (
      <div>
        <AppBar position="fixed">
          <Toolbar className={back || menu ? '' : classes.bar}>
            {
              back ?
                <IconButton onClick={() => history.goBack()} color="inherit" aria-label="Menu">
                  <Icon>arrow_back_ios</Icon>
                </IconButton>
                :
                menu ?
                  <IconButton
                    color="inherit" aria-label="Menu" onClick={this.toggleDrawer}>
                    <Icon>menu</Icon>
                  </IconButton>
                  :
                  <div />
            }
            <Typography variant="title" color="inherit">
              {title}
            </Typography>
            {/* <AppSearch /> */}
            {/* <TextField
              defaultValue="react-bootstrap"
              id="bootstrap-input"
              InputProps={{
                disableUnderline: true,
                classes: {
                  root: classes.bootstrapRoot,
                  input: classes.bootstrapInput,
                },
              }}
            /> */}
            {/* <div className={classes.actions}> */}
              {
                withoutNotification ?
                  <div />
                  :
                  <IconButton
                    color="inherit"
                    className={classes.notification}
                    onClick={() => history.push('/busca')}
                  >
                    <Icon>search</Icon>
                  </IconButton>
              }
              {
                withoutNotification ?
                  <div />
                  :
                  <IconButton
                    color="inherit"
                    className={classes.notification}
                    onClick={() => history.push('/notificacoes')}
                  >
                    <Badge color="secondary" badgeContent={2}>
                      <Icon>notifications</Icon>
                    </Badge>
                  </IconButton>
              }

            {/* </div> */}
          </Toolbar>
        </AppBar>
        <Drawer open={open} onClose={this.toggleDrawer}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer}
            onKeyDown={this.toggleDrawer}
          >
            <AppBar position="static">
              <Toolbar>
                <Typography variant="title" color="inherit" className={classes.logo}>
                  MeUni
                </Typography>
              </Toolbar>
            </AppBar>
            <List component="nav" className={classes.menuList}>
              <ListItem button onClick={() => history.push('/perfil/gabrielgene')}>
                <Avatar src="https://avatars3.githubusercontent.com/u/19671668?s=460&v=4" alt="gabrielgene" />
                <ListItemText primary="Gabriel Genê" secondary="@gabrielgene" />
              </ListItem>
              <Divider />
              <ListItem button onClick={() => history.push('/inicio')}>
                <ListItemIcon>
                  <Icon>home</Icon>
                </ListItemIcon>
                <ListItemText primary="Inicio" />
              </ListItem>
              <ListItem button onClick={() => history.push('/perfil/gabrielgene')}>
                <ListItemIcon>
                  <Icon>person</Icon>
                </ListItemIcon>
                <ListItemText primary="Perfil" />
              </ListItem>
              <ListItem button onClick={() => history.push('/notificacoes')}>
                <ListItemIcon>
                  <Icon>notifications</Icon>
                </ListItemIcon>
                <ListItemText primary="Notificações" />
              </ListItem>
              <ListItem button onClick={() => history.push('/configuracoes')}>
                <ListItemIcon>
                  <Icon>build</Icon>
                </ListItemIcon>
                <ListItemText primary="Configurações" />
              </ListItem>
              <Divider />
              <ListItem button onClick={() => history.push('/')}>
                <ListItemIcon>
                  <Icon>exit_to_app</Icon>
                </ListItemIcon>
                <ListItemText primary="Sair" />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemIcon>
                  <Icon>verified_user</Icon>
                </ListItemIcon>
                <ListItemText primary={Cookies.get('userId')} />
              </ListItem>
            </List>
          </div>
        </Drawer>
      </div>
    )
  }
}

export default withStyles(styles)(withRouter(Topbar));
