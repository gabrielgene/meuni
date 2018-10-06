import React from 'react';
import Modal from '@material-ui/core/Modal';
import { withStyles } from '@material-ui/core/styles';
import ReplyPage from '../../pages/reply';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
    height: '100%',
  },
});

const Reply = ({ open, classes }) => (
  <Modal open={open} >
    <div className={classes.root}>
      <ReplyPage />
    </div>
  </Modal>
);

export default withStyles(styles, { withTheme: true })(Reply);
