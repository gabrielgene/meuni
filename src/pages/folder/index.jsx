import React from 'react';
import Topbar from '../../components/topbar';
import Post from '../../components/postItem';
import { withStyles } from '@material-ui/core/styles';
import { subs, posts } from '../../utils/fakeData';

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 7,
  },
});

const Folder = ({ match, classes }) => (
  <div className={classes.root}>
    <Topbar menu title={subs[match.params.subId].name} />
    {window.scrollTo(0, 0)}
    <div>
      {
        posts.filter(p => p.subid === parseInt(match.params.subId, 10))
          .map(p => (
            <Post
              key={p.id}
              id={p.id}
              name={p.name}
              username={p.userName}
              avatarUrl={p.avatarUrl}
              post={p.post}
              likes={p.likes}
              comments={p.comments}
              subId={match.params.subId}
            />
          ))
      }
    </div>
  </div>
);

export default withStyles(styles)(Folder);
