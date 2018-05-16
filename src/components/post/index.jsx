import React from 'react';
import Card, { CardHeader, CardContent, CardActions } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import Icon from 'material-ui/Icon';
import { withStyles } from 'material-ui/styles';
import { withRouter } from 'react-router';

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
});


class Post extends React.Component {
  state = {
    like: false,
    number: 7,
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

  render() {
    const { classes, history, id, name, userName, post, comments, avatarUrl, subid } = this.props;
    const { like, number } = this.state;

    return (
      <div>
        <Card onClick={() => !!subid ? history.push(`/sub/${subid}/${id}`) : ''}>
        {/* <Card onClick={() => !!subid ? console.log(history) : ''}> */}
          <CardHeader
            title={name}
            subheader={userName}
            avatar={
              <Avatar src={avatarUrl} alt="image" />
            }
          />
          <CardContent className={classes.content}>
            <Typography component="p">
              {post}
            </Typography>
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
            <Typography className={classes.comment} variant="body2">
              <IconButton aria-label="next">
                <Icon>chat</Icon>
              </IconButton>
              {comments}
            </Typography>
          </CardActions>
        </Card>
        <Divider />
      </div>
    );
  };
};

export default withStyles(styles)(withRouter(Post));
