import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { withRouter } from 'react-router';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import Divider from '@material-ui/core/Divider';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import Topbar from '../../components/topbar';
import PostItem from '../../components/postItem';
import { posts, subs } from '../../utils/fakeData';

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
    marginTop: theme.spacing.unit,
  },
  description: {
    paddingTop: 0,
    paddingBottom: '8px !important',
  }
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
        <Topbar menu title="Perfil" />
        <Card className={classes.profileInfo} raised>
          <CardHeader
            title="Gabriel Genê"
            subheader="@gabrielgene"
            avatar={
              <Avatar src="https://avatars3.githubusercontent.com/u/19671668?s=460&v=4" alt="image" />
            }
          />
          <CardContent className={classes.description}>
            <Typography component="p">
              Essa é a descrição do meu perfil.
              </Typography>
          </CardContent>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            fullWidth
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab label="Postagens" />
            <Tab label="Diretórios" />
          </Tabs>
        </Card>


        <SwipeableViews
          className={classes.content}
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>
            <PostItem
              id={posts[0].id}
              name={posts[0].name}
              userName={posts[0].userName}
              avatarUrl={posts[0].avatarUrl}
              post={posts[0].post}
              likes={posts[0].likes}
              comments={posts[0].comments}
              subId={posts[0].subid}
            />
            <PostItem
              id={posts[0].id}
              name={posts[0].name}
              userName={posts[0].userName}
              avatarUrl={posts[0].avatarUrl}
              post={posts[0].post}
              likes={posts[0].likes}
              comments={posts[0].comments}
              subId={posts[0].subid}
            />
            <PostItem
              id={posts[0].id}
              name={posts[0].name}
              userName={posts[0].userName}
              avatarUrl={posts[0].avatarUrl}
              post={posts[0].post}
              likes={posts[0].likes}
              comments={posts[0].comments}
              subId={posts[0].subid}
            />
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
