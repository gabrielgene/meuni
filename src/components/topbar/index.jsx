import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import { withStyles } from 'material-ui/styles';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import Icon from 'material-ui/Icon';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import { withRouter } from 'react-router';

const styles = theme => ({
  bar: {
    display: 'flex',
    justifyContent: 'center',
  },
  menuList: {
    width: 250,
  }
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
    const { back, menu, title, classes, history } = this.props;
    const { open } = this.state;
    return (
      <div>
        <AppBar position="fixed">
          <Toolbar className={back || menu ? '' : classes.bar}>
            {
              back ?
                <IconButton onClick={() => this.props.history.goBack()} color="inherit" aria-label="Menu">
                  <Icon>arrow_back_ios</Icon>
                </IconButton>
                :
                menu ?
                  <IconButton color="inherit" aria-label="Menu" onClick={this.toggleDrawer}>
                    <Icon>menu</Icon>
                  </IconButton>
                  :
                  <div />
            }
            <Typography variant="title" color="inherit">
              {title}
            </Typography>
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
                <Typography variant="title" color="inherit">
                  MeUni
                </Typography>
              </Toolbar>
            </AppBar>
            <List component="nav" className={classes.menuList}>
              <ListItem onClick={() => history.push('/perfil/gabrielgene')}>
                <Avatar src="https://avatars3.githubusercontent.com/u/19671668?s=460&v=4" alt="gabrielgene"/>
                <ListItemText primary="Gabriel Genê" secondary="@gabrielgene" />
              </ListItem>
              <Divider />
              <ListItem button onClick={() => history.push('/inicio')}>
                <ListItemIcon>
                  <Icon>home</Icon>
                </ListItemIcon>
                <ListItemText primary="Inicio" />
              </ListItem>
              <ListItem onClick={() => history.push('/perfil/gabrielgene')}>
                <ListItemIcon>
                  <Icon>person</Icon>
                </ListItemIcon>
                <ListItemText primary="Perfil" />
              </ListItem>
              <ListItem onClick={() => history.push('/perfil/gabrielgene')}>
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
            </List>
          </div>
        </Drawer>
      </div>
    )
  }
}

export default withStyles(styles)(withRouter(Topbar));
