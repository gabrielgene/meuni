import React from 'react';
import Topbar from '../../components/topbar';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    marginTop: 64,
  }
};

const Search = ({ classes }) => (
  <div>
    <Topbar back search/>
    <div className={classes.root}>
      <h1>Busca</h1>
    </div>
  </div>
);

export default withStyles(styles)(Search);
