import React from 'react';
import Topbar from '../../components/topbar';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    marginTop: 56,
  }
};

const Notifications = ({ classes }) => (
  <div>
    <Topbar menu title="Notificações" />
    <div className={classes.root}>
      Notificações
    </div>
  </div>
);

export default withStyles(styles)(Notifications);
