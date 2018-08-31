import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import Cookies from 'js-cookie';

import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Divider from '@material-ui/core/Divider';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import { register, getFoldersByCourse } from '../../fetches';

import Topbar from '../../components/topbar';
import { subs } from '../../utils/fakeData';

const suggestions = [
  { label: 'Ciência da Computação', value: 'ciencia-da-computacao' },
  { label: 'Direito', value: 'direito' },
];

const styles = theme => ({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
  formWrapper: {
    marginTop: 56,
    marginBottom: 30,
    padding: 24,
  },
  avatar: {
    width: 80,
    height: 80,
  },
  selectSubs: {
    paddingTop: 8,
    textAlign: 'center',
  },
  header: {
    marginTop: 57,
  },
  list: {
    marginBottom: 50,
  },
  input: {
    display: 'flex',
    padding: 0,
  },
  valueContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center',
  },
  noOptionsMessage: {
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
  },
  singleValue: {
    fontSize: 16,
  },
  placeholder: {
    position: 'absolute',
    left: 2,
    fontSize: 16,
  },
  paper: {
    marginTop: theme.spacing.unit,
  },
  selectCourse: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit,
  }
});

function NoOptionsMessage(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.noOptionsMessage}
      {...props.innerProps}
    >
      Curso não encontrado
    </Typography>
  );
}

function inputComponent({ inputRef, ...props }) {
  return <div ref={inputRef} {...props} />;
}

function Control(props) {
  return (
    <TextField
      fullWidth
      InputProps={{
        inputComponent,
        inputProps: {
          className: props.selectProps.classes.input,
          inputRef: props.innerRef,
          children: props.children,
          ...props.innerProps,
        },
      }}
      {...props.selectProps.textFieldProps}
    />
  );
}

function Option(props) {
  return (
    <MenuItem
      buttonRef={props.innerRef}
      selected={props.isFocused}
      component="div"
      style={{
        fontWeight: props.isSelected ? 500 : 400,
      }}
      {...props.innerProps}
    >
      {props.children}
    </MenuItem>
  );
}

function Placeholder(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.placeholder}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

function SingleValue(props) {
  return (
    <Typography className={props.selectProps.classes.singleValue} {...props.innerProps}>
      {props.children}
    </Typography>
  );
}

function ValueContainer(props) {
  return <div className={props.selectProps.classes.valueContainer}>{props.children}</div>;
}

function Menu(props) {
  return (
    <Paper square className={props.selectProps.classes.paper} {...props.innerProps}>
      {props.children}
    </Paper>
  );
}

const defaultAvatar = "data:image/jpeg;base64,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"

const components = {
  Option,
  Control,
  NoOptionsMessage,
  Placeholder,
  SingleValue,
  ValueContainer,
  Menu,
};

class DotsMobileStepper extends React.Component {
  state = {
    activeStep: 0,
    user: '',
    pass: '',
    name: '',
    avatarUrl: '',
    email: '',
    course: '',
    description: '',
    directories: [],
    folderList: [],
    selectCourse: '',
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

  handleSelectChange = value => {
    this.setState({
      selectCourse: value,
      course: value.value,
    });
  };

  handleToggle = value => () => {
    const { directories } = this.state;
    const currentIndex = directories.indexOf(value);
    const newChecked = [...directories];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      directories: newChecked,
    });
  };

  handleSubmit = async () => {
    await register(this.state);
    const userId = Cookies.get('userId');
    if (userId !== undefined) {
      this.props.history.push('/inicio')
    } else {
      console.log('error');
    }
  };

  setFolderList = async () => {
    const folders = await getFoldersByCourse(this.state.course);
    this.setState({
      folderList: folders.map(f => ({ id: f._id, name: f.name, value: f.slug })),
    });
  }

  renderStep() {
    const { classes, theme } = this.props;
    const {
      user,
      pass,
      name,
      avatarUrl,
      email,
      description,
      selectCourse,
    } = this.state;

    const selectStyles = {
      input: base => ({
        ...base,
        color: theme.palette.text.primary,
      }),
    };

    if (this.state.activeStep === 0) {
      return (
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
            value={user}
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
            value={pass}
            fullWidth
            onChange={this.handleChange('pass')}
            margin="normal"
          />
          <Select
            className={classes.selectCourse}
            classes={classes}
            value={selectCourse}
            options={suggestions}
            components={components}
            styles={selectStyles}
            textFieldProps={{
              label: 'Curso',
              InputLabelProps: {
                shrink: true,
              },
            }}
            placeholder="Ex: Ciência da Computação"
            onChange={this.handleSelectChange}
          />
        </div>
      )

    } else if (this.state.activeStep === 1) {
      this.setFolderList();
      return (
        <div className={classes.formWrapper}>
          <Avatar className={classes.avatar} src={this.state.avatarUrl || defaultAvatar} alt="avatar" />
          <TextField
            className={classes.formField}
            id="avatarUrl"
            label="Url da imagem de perfil"
            autoComplete="off"
            placeholder="Ex: http://minhaimagemdeperfil.jpg"
            InputLabelProps={{
              shrink: true,
            }}
            value={avatarUrl}
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
            value={name}
            fullWidth
            onChange={this.handleChange('name')}
            margin="normal"
          />
          <TextField
            className={classes.formField}
            id="email"
            label="Email"
            autoComplete="off"
            placeholder="Ex: joao@gmail.com"
            InputLabelProps={{
              shrink: true,
            }}
            value={email}
            fullWidth
            onChange={this.handleChange('email')}
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
            value={description}
            fullWidth
            onChange={this.handleChange('description')}
            margin="normal"
          />
        </div>
      )
    } else if (this.state.activeStep === 2) {
      return (
        <div className={classes.header}>
          <Divider />
          <Typography
            color="secondary"
            className={classes.selectSubs}
          >
            Selecione os diretórios que deseja seguir.
          </Typography>

          <List className={classes.list}>
            <Divider />
            {
              this.state.folderList.map(({ id, name, value }) => (
                <div key={id}>
                  <ListItem className={classes.subItem} button>
                    <ListItemText primary={name} />
                    <ListItemSecondaryAction>
                      <Checkbox
                        onChange={this.handleToggle(value)}
                        checked={this.state.directories.find(d => d === value)}
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
        <Topbar back title="Registre-se" withoutNotification />

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
              onClick={!isFinalStep ? this.handleNext : this.handleSubmit}
              disabled={this.state.activeStep === 5}
            >
              {isFinalStep ? 'Concluir' : 'Próximo'}
              <Icon> {isFinalStep ? 'keyboard_arrow_right' : 'keyboard_arrow_right'} </Icon>

            </Button>
          }
          backButton={
            <Button size="small" onClick={this.handleBack} disabled={this.state.activeStep === 0}>
              <Icon>keyboard_arrow_left</Icon>
              Back
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
