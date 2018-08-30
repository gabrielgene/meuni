import React from 'react';
import Topbar from '../../components/topbar';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    marginTop: 56,
  }
};

const Search = ({ classes }) => (
  <div>
    <Topbar menu title="Busca" />
    <div className={classes.root}>
      Busca
    </div>
  </div>
);

export default withStyles(styles)(Search);
