import React from 'react';
import Topbar from '../../components/topbar';
import Post from '../../components/post';
import { withStyles } from 'material-ui/styles';
import { subs, posts } from '../../utils/fakeData';

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 7,
  },
});

const Folder = ({ match, classes }) => (
  <div className={classes.root}>
    <Topbar menu title={subs[match.params.subid].name} />
    <div>
      {
        posts.map( p => (
          <Post
            key={p.id}
            id={p.id}
            name={p.name}
            username={p.userName}
            avatarUrl={p.avatarUrl}
            post={p.post}
            likes={p.likes}
            comments={p.comments}
            subid={match.params.subid}
          />
        ))
      }
    </div>
  </div>
);

export default withStyles(styles)(Folder);
