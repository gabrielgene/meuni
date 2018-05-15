import React from 'react';
import Topbar from '../../components/topbar';
import List, { ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import TextField from 'material-ui/TextField';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { withStyles } from 'material-ui/styles';
import Divider from 'material-ui/Divider';
import { subs } from '../../utils/fakeData';

const styles = theme => ({
  list: {
    marginTop: theme.spacing.unit * 7,
  }
});

const Home = ({ classes }) => (
  <div>
    <Topbar menu title="MeUni" />
    <List className={classes.list}>
      <Divider />
      {
        subs.map((s, idx) => (
          <div key={idx}>
            <ListItem button >
              <ListItemText primary={s.name} />
              <ListItemSecondaryAction>
                <IconButton aria-label="next">
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

export default withStyles(styles)(Home);
