import React from 'react';

import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import Topbar from '../../components/topbar';
import PostItem from '../../components/postItem';
import { getPostById } from '../../fetches';

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
    commentList: [],
  };

  async componentDidMount() {
    const { postId } = this.props.match.params;
    const post = await getPostById(postId);
    this.setState({ loading: false, post });
    window.scrollTo(0, 0);
  }

  render() {
    const { classes } = this.props;
    const { loading, post, commentList } = this.state;
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
        <Topbar back title="Publicação" />
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
                  commentList.map(c => (
                    <PostItem
                      key={c.id}
                      id={c.id}
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
        }
      </div>
    );
  }
};

export default withStyles(styles)(Post);
