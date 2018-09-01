import React from "react";
import { withStyles } from "@material-ui/core/styles";

import Topbar from "../../components/topbar";
import PostItem from "../../components/postItem";

import { getPostsByFolder } from "../../fetches";

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 7
  }
});

class Folder extends React.Component {
  state = {
    loading: true,
    posts: []
  };

  async componentDidMount() {
    const { match } = this.props;

    const folder = match.params.folder;
    if (folder === undefined) {
      this.props.history.push("/");
    } else {
      const posts = await getPostsByFolder(folder);
      this.setState({ posts, loading: false });
    }
  }

  render() {
    const { classes, match } = this.props;
    console.log(match);
    const { posts } = this.state;

    return (
      <div className={classes.root}>
        <Topbar menu title={match.params.folder} />
        {window.scrollTo(0, 0)}
        <div>
          {posts
            .map(p => (
              <PostItem
                key={p.id}
                id={p.id}
                name={p.name}
                username={p.userName}
                avatarUrl={p.avatarUrl}
                post={p.post}
                likes={p.likes}
                comments={p.comments}
                subId={match.params.folder}
              />
            ))}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Folder);
