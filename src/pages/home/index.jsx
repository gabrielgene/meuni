import React from 'react';
import Topbar from '../../components/topbar';
import List from '@material-ui/core/List';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import { withRouter } from 'react-router';
import { posts } from '../../utils/fakeData';
import Post from '../../components/post';

const styles = theme => ({
  list: {
    marginTop: theme.spacing.unit * 7,
  }
});

const Home = ({ match, classes, history }) => (
  <div>
    <Topbar menu title="Feed" />
    <List className={classes.list}>
      <Divider />
      {
        posts.map(p => (
          <Post
            key={p.id}
            id={p.id}
            name={p.name}
            username={p.userName}
            avatarUrl={p.avatarUrl}
            post={p.post}
            likes={p.likes}
            comments={p.comments}
            subId={p.subid}
          />
        ))
      }
    </List>
  </div>
)

export default withStyles(styles)(withRouter(Home));
