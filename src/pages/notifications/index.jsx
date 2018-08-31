import React from 'react';
import Topbar from '../../components/topbar';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    marginTop: 64,
  }
};

const Notifications = ({ classes }) => (
  <div>
    <Topbar menu title="Notificações" />
    <div className={classes.root}>
      <h1>Notificações</h1>
    </div>
  </div>
);

export default withStyles(styles)(Notifications);
