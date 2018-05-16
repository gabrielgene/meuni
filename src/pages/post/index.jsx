import React from 'react';
import Topbar from '../../components/topbar';
import PostItem from '../../components/post';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import { withStyles } from 'material-ui/styles';
import { posts, commentsFake } from '../../utils/fakeData';

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 7,
  },
  title: {
    padding: theme.spacing.unit,
    textAlign: 'center',
  },
});

class Post extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { id, name, userName, avatarUrl, post, likes, comments } = posts[this.props.match.params.postid];

    return (
      <div>
        <Topbar back title="Postagem" />
        <div className={this.props.classes.root}>
          <PostItem
            id={id}
            name={name}
            userName={userName}
            avatarUrl={avatarUrl}
            post={post}
            likes={likes}
            comments={comments}
          />
        </div>
        <Typography className={this.props.classes.title} variant="title">
          Comentários
        </Typography>
        <Divider />
        <div className={this.props.classes.content}>
          {
            commentsFake.map(c => (
              <PostItem
                key={c.id}
                id={c.id}
                name={c.name}
                userName={c.userName}
                avatarUrl={c.avatarUrl}
                post={c.post}
                likes={c.likes}
                comments={c.comments}
              />
            ))
          }
        </div>
      </div>
    );
  }
};

export default withStyles(styles)(Post);
