import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import MobileStepper from 'material-ui/MobileStepper';
import Icon from 'material-ui/Icon';
import Button from 'material-ui/Button';
import Topbar from '../../components/topbar';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Avatar from 'material-ui/Avatar';
import List, { ListItem, ListItemText, ListItemSecondaryAction } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { subs } from '../../utils/fakeData';
import Checkbox from 'material-ui/Checkbox';


const styles = {
  root: {
    width: '100%',
    flexGrow: 1,
    position: 'fixed',
    bottom: 0,
    height: '52px',
  },
  formWrapper: {
    height: '80vh',
    flexDirection: 'column',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formField: {
    width: '80%',
  },
  avatar: {
    width: 80,
    height: 80,
    bottom: '32px',
  },
  selectSubs: {
    top: '30px',
    padding: '80px 16px 20px',
    fontSize: '26px',
  },
  list: {
    overflow: 'scroll',
    height: '64vh',
    paddingBottom: '50px',
  },
  subItem: {
    paddingTop: '24px',
    paddingBottom: '24px'
  }
};

const defaultAvatar = "data:image/jpeg;base64,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"

class DotsMobileStepper extends React.Component {
  state = {
    activeStep: 0,
    avatarUrl: '',
    checked: [0],
  };

  handleNext = () => {
    this.setState({
      activeStep: this.state.activeStep + 1,
    });
  };

  handleBack = () => {
    this.setState({
      activeStep: this.state.activeStep - 1,
    });
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked,
    });
  };

  renderStep() {
    const { classes } = this.props;

    if (this.state.activeStep === 0) {
      return  (
        <div className={classes.formWrapper}>
          <div className={classes.avatar} />
          <TextField
            className={classes.formField}
            id="user"
            label="Usuário"
            autoComplete="off"
            placeholder="Ex: gabrielgene"
            InputLabelProps={{
              shrink: true,
            }}
            value={this.state.user}
            fullWidth
            onChange={this.handleChange('user')}
            margin="normal"
          />
          <TextField
            className={classes.formField}
            id="pass"
            label="Senha"
            autoComplete="off"
            InputLabelProps={{
              shrink: true,
            }}
            placeholder="Ex: ********"
            type="password"
            value={this.state.pass}
            fullWidth
            onChange={this.handleChange('pass')}
            margin="normal"
          />
          <TextField
            className={classes.formField}
            id="course"
            label="Curso"
            autoComplete="off"
            placeholder="Ex: Medicina"
            InputLabelProps={{
              shrink: true,
            }}
            value={this.state.course}
            fullWidth
            onChange={this.handleChange('course')}
            margin="normal"
          />
        </div>
      )

    } else if (this.state.activeStep === 1) {
      return (
        <div className={classes.formWrapper}>
          <Avatar className={classes.avatar} src={this.state.avatarUrl || defaultAvatar} alt="avatar"/>
          <TextField
            className={classes.formField}
            id="avatarUrl"
            label="Url da imagem de perfil"
            autoComplete="off"
            placeholder=""
            InputLabelProps={{
              shrink: true,
            }}
            value={this.state.avatarUrl}
            fullWidth
            onChange={this.handleChange('avatarUrl')}
            margin="normal"
          />
          <TextField
            className={classes.formField}
            id="Name"
            label="Nome"
            autoComplete="off"
            InputLabelProps={{
              shrink: true,
            }}
            placeholder="João"
            value={this.state.name}
            fullWidth
            onChange={this.handleChange('name')}
            margin="normal"
          />
          <TextField
            className={classes.formField}
            id="description"
            label="Descrição"
            autoComplete="off"
            placeholder="Ex: Gente fina"
            InputLabelProps={{
              shrink: true,
            }}
            value={this.state.description}
            fullWidth
            onChange={this.handleChange('description')}
            margin="normal"
          />
        </div>
      )
    } else if (this.state.activeStep === 2) {
      return (
        <div>
          <Typography
            color="primary"
            className={classes.selectSubs}
            variant="display2"
          >
            Selecione os subdiretorios que deseja seguir.
          </Typography>

          <List className={classes.list}>
            <Divider />
            {
              subs.map((s, idx) => (
                <div key={idx}>
                  <ListItem className={classes.subItem} button >
                    <ListItemText primary={s.name} />
                    <ListItemSecondaryAction>
                      <Checkbox
                        onChange={this.handleToggle(idx)}
                        checked={this.state.checked.indexOf(idx) !== -1}
                      />
                    </ListItemSecondaryAction>
                  </ListItem>
                  <Divider />
                </div>
              ))
            }
          </List>
        </div>
      )
    }
  }

  render() {
    const { classes } = this.props;
    const { activeStep } = this.state;
    const isFinalStep = activeStep === 2;

    return (
      <div>
        <Topbar back title="Registre-se" />

        {this.renderStep()}

        <MobileStepper
          variant="dots"
          steps={3}
          position="static"
          activeStep={this.state.activeStep}
          className={classes.root}
          nextButton={
            <Button
              size="small"
              onClick={!isFinalStep ? this.handleNext : () => this.props.history.push('/inicio')}
              disabled={this.state.activeStep === 5}
            >
              {isFinalStep ? 'Concluir' : 'Próximo'}
              <Icon> {isFinalStep ? 'keyboard_arrow_right' : 'keyboard_arrow_right'} </Icon>

            </Button>
          }
          backButton={
            <Button size="small" onClick={this.handleBack} disabled={this.state.activeStep === 0}>
              <Icon> keyboard_arrow_left </Icon> Back
            </Button>
          }
        />
      </div>
    );
  }
}

DotsMobileStepper.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(DotsMobileStepper);
