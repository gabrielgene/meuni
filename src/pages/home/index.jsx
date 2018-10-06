import React from 'react';
import { withRouter } from 'react-router';
import Cookies from 'js-cookie';

import List from '@material-ui/core/List';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import CircularProgress from '@material-ui/core/CircularProgress';

import PostItem from '../../components/postItem';
import Topbar from '../../components/topbar';
import { getPosts } from '../../fetches';

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 9,
  },
  loading: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: theme.spacing.unit * 3,
  }
});

class Home extends React.Component {
  state = {
    loading: true,
    posts: [],
  };

  async componentDidMount() {
    const userId = Cookies.get('userId');
    if (userId === undefined) {
      this.props.history.push('/')
    } else {
      const posts = await getPosts();
      this.setState({ posts, loading: false });
    }
  }

  render() {
    const { classes } = this.props;
    const { loading, posts } = this.state;
    return (
      <div className={classes.root}>
        <Topbar menu title="Feed" notifications search/>
        {
          loading ?
            <div className={classes.loading}>
              <CircularProgress size={50} color="secondary" />
            </div>
            :
            <List>
              <Divider />
              {
                posts.map(p => (
                  <PostItem
                    key={p._id}
                    id={p._id}
                    name={p.name}
                    username={p.user}
                    avatarUrl={p.avatarUrl}
                    post={p.text}
                    likes={p.likes}
                    comments={p.comments}
                    folder={p.folder}
                    folderName={p.folderName}
                  />
                ))
              }
            </List>
        }
      </div>
    )
  }
};

export default withStyles(styles)(withRouter(Home));
