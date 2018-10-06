import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Topbar from '../../components/topbar';
import { sendReply } from '../../fetches';

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 9,
    marginBottom: theme.spacing.unit * 3,
    padding: '0 8px',
  },
});

class Reply extends React.Component {
  state = {
    comment: '',
  }

  handleChange = e => {
    this.setState({ comment: e.target.value });
  }

  onClose = () => {
    const { match, history } = this.props;
    history.push(`/post/${match.params.postId}`)
  }

  onReply = async () => {
    const { match } = this.props;
    await sendReply({
      comment: this.state.comment,
      postId: match.params.postId,
    });
    this.onClose();
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Topbar
          close
          onClose={this.onClose}
          title="Comentar"
          send
          onSend={this.onReply}
        />
        <TextField
          id="multiline-flexible"
          multiline
          placeholder="Digite o seu comentario aqui..."
          value={this.state.comment}
          onChange={this.handleChange}
          className={classes.textField}
          autoFocus
          fullWidth
        />
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(Reply);
