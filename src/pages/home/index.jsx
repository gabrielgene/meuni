import React from 'react';
import Topbar from '../../components/topbar';
import List, { ListItem, ListItemText, ListItemSecondaryAction } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import { withStyles } from 'material-ui/styles';
import Divider from 'material-ui/Divider';
import { withRouter } from 'react-router';
import { subs } from '../../utils/fakeData';

const styles = theme => ({
  list: {
    marginTop: theme.spacing.unit * 7,
  }
});

const Home = ({ classes, history }) => (
  <div>
    <Topbar menu title="MeUni" />
    <List className={classes.list}>
      <Divider />
      {
        subs.map((s, idx) => (
          <div key={idx}>
            <ListItem button onClick={() => history.push(`/sub/${s.id}`)}>
              <ListItemText primary={s.name} />
              <ListItemSecondaryAction>
                <IconButton aria-label="next" onClick={() => history.push(`/sub/${s.id}`)}>
                  <Icon>navigate_next</Icon>
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider />
          </div>
        ))
      }
    </List>
  </div>
)

export default withStyles(styles)(withRouter(Home));
