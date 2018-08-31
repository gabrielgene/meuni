import React from 'react';
import Topbar from '../../components/topbar';
import PostItem from '../../components/postItem';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';

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
});

class Post extends React.Component {
  state = {
    loading: true,

  }
  componentDidMount() {

    window.scrollTo(0, 0);
  }

  render() {
    const {
      id,
      name,
      user,
      avatarUrl,
      post,
      likes,
      comments,
      folder,
      folderName,
    } = this.props;

    return (
      <div className={this.props.classes.post}>
        <Topbar back title="Postagem" />
        <div className={this.props.classes.root}>
          <PostItem
            id={id}
            name={name}
            userName={user}
            avatarUrl={avatarUrl}
            post={post}
            likes={likes}
            comments={comments}
            folder={folder}
            folderName={folderName}
          />
        </div>
        <Typography className={this.props.classes.title} variant="subheading">
          Comentários
        </Typography>
        <Divider />
        <div className={this.props.classes.content}>
          {/* {
            commentsFake.map(c => (
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
          } */}
        </div>
      </div>
    );
  }
};

export default withStyles(styles)(Post);
