import React from 'react';
import { withRouter } from 'react-router';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  card: {
    borderBottom: 'border-bottom: 1px solid #0000004a',
  },
  content: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  comment: {
    marginLeft: theme.spacing.unit * 2,
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
  },
  chip: {
    marginLeft: theme.spacing.unit * 2,
  }
});


class PostItem extends React.Component {
  state = {
    like: false,
    number: 0,
  };

  handleChange = (value, e) => {
    e.stopPropagation()
    this.setState({
      like: !this.state.like,
      number: this.state.number + value,
    });
  };

  componentWillMount() {
    this.setState({
      number: this.props.likes,
    });
  }

  openPost = () => {
    const { history, id } = this.props;
    history.push(`/post/${id}`)
  }

  openFolder = e => {
    const { history, folder } = this.props;
    history.push(`/sub/${folder}`);
    e.stopPropagation();
  }

  render() {
    const {
      classes,
      name,
      user,
      post,
      comments,
      avatarUrl,
      folderName,
    } = this.props;
    const { like, number } = this.state;

    return (
      <div>
        <Card onClick={this.openPost}>
          <div className={classes.cardHeader}>
            <CardHeader
              title={name}
              subheader={user}
              avatar={
                <Avatar src={avatarUrl} alt="image" />
              }
            />
            {name ?
              <Chip
                className={classes.chip}
                label={folderName}
                onClick={this.openFolder}
              />
              : <div />
            }
          </div>
          <CardContent className={classes.content}>
            {
              name ?
                <Typography component="p">
                  {post}
                </Typography>
                :
                <Typography component="p" variant="caption">
                  {post}
                </Typography>
            }
          </CardContent>
          <CardActions disableActionSpacing>
            {
              like ?
                <Typography variant="body2">
                  <IconButton aria-label="next" onClick={e => this.handleChange(-1, e)}>
                    <Icon>favorite</Icon>
                  </IconButton>
                  {number}
                </Typography>
                :
                <Typography variant="body2">
                  <IconButton aria-label="next" onClick={e => this.handleChange(1, e)}>
                    <Icon>favorite_outline</Icon>
                  </IconButton>
                  {number}
                </Typography>
            }
            {
              name ?
                <Typography className={classes.comment} variant="body2">
                  <IconButton aria-label="next">
                    <Icon>chat</Icon>
                  </IconButton>
                  {comments}
                </Typography>
                :
                <div />
            }
          </CardActions>
        </Card>
        <Divider />
      </div>
    );
  };
};

export default withStyles(styles)(withRouter(PostItem));