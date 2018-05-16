import React from 'react';
import Topbar from '../../components/topbar';
import { withStyles } from 'material-ui/styles';
import Card, { CardHeader } from 'material-ui/Card';
import List, { ListItem, ListItemText, ListItemSecondaryAction } from 'material-ui/List';
import PostItem from '../../components/post';
import Avatar from 'material-ui/Avatar';
import { posts, subs } from '../../utils/fakeData';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import { withRouter } from 'react-router';
import Divider from 'material-ui/Divider';
import SwipeableViews from 'react-swipeable-views';
import { Tabs, Tab, AppBar, Typography } from 'material-ui';

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 7,
    backgroundColor: theme.palette.background.paper,
    width: '100%',
  },
  profileInfo: {
    marginTop: theme.spacing.unit * 7,
  },
  content: {
    marginTop: theme.spacing.unit * 23,
  },
});

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir}>
      {children}
    </Typography>
  );
}

class Profile extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    window.scrollTo(0, 0);
    this.setState({ value });
  };

  handleChangeIndex = index => {
    window.scrollTo(0, 0);
    this.setState({ value: index });
  };

  render() {
    const { classes, theme, history } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="fixed" color="primary">
          <Topbar menu title="Perfil" />
          <Card className={classes.profileInfo} raised>
            <CardHeader
              title="Gabriel Genê"
              subheader="@gabrielgene"
              avatar={
                <Avatar src="https://avatars3.githubusercontent.com/u/19671668?s=460&v=4" alt="image" />
              }
            />
          </Card>

          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            fullWidth
          >
            <Tab label="Postagens" />
            <Tab label="Diretórios" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          className={classes.content}
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>
            {
              posts.map(p => (
                <PostItem
                  key={p.id}
                  id={p.id}
                  name={p.name}
                  userName={p.userName}
                  avatarUrl={p.avatarUrl}
                  post={p.post}
                  likes={p.likes}
                  comments={p.comments}
                  subid={p.subid}
                />
              ))
            }
          </TabContainer>
          <TabContainer dir={theme.direction}>
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
          </TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(withRouter(Profile));
