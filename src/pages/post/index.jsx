import React from 'react';

import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import Topbar from '../../components/topbar';
import PostItem from '../../components/postItem';
import { getPostById, getReplies } from '../../fetches';

const styles = theme => ({
  post: {
    backgroundColor: '#f4f4f4',
  },
  root: {
    marginTop: theme.spacing.unit * 9,
  },
  title: {
    padding: theme.spacing.unit,
    textAlign: 'center',
  },
  loading: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: theme.spacing.unit * 12,
  }
});

class Post extends React.Component {
  state = {
    loading: true,
    post: {},
    replies: [],
  };

  async componentDidMount() {
    const { postId } = this.props.match.params;
    const post = await getPostById(postId);
    const replies = await getReplies(postId);
    console.log(replies)
    this.setState({ loading: false, post, replies });
    window.scrollTo(0, 0);
  }

  render() {
    const { classes } = this.props;
    const { loading, post, replies } = this.state;
    const {
      _id,
      name,
      user,
      avatarUrl,
      text,
      likes,
      comments,
      folder,
      folderName,
    } = post;

    return (
      <div className={classes.post}>
        <Topbar back title="Publicação" search notifications />
        {
          loading ?
            <div className={classes.loading}>
              <CircularProgress size={50} color="secondary" />
            </div>
            :
            <div>
              <div className={classes.root}>
                <PostItem
                  withoutClick
                  id={_id}
                  name={name}
                  userName={user}
                  avatarUrl={avatarUrl}
                  post={text}
                  likes={likes}
                  comments={comments}
                  folder={folder}
                  folderName={folderName}
                />
              </div>
              <Typography className={classes.title} variant="subheading">
                Comentários
              </Typography>
              <Divider />
              <div className={classes.content}>
                {
                  replies.map(r => (
                    <PostItem
                      key={r._id}
                      user={r.user}
                      avatarUrl={r.avatarUrl}
                      likes={r.likes}
                      comment={r.comment}
                    />
                  ))
                }
              </div>
            </div>
        }
      </div>
    );
  }
};

export default withStyles(styles)(Post);
