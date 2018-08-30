import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import Icon from '@material-ui/core/Icon';
import Input from '@material-ui/core/Input';
import { fade } from '@material-ui/core/styles/colorManipulator';
// import SearchIcon from '@material-ui/icons/Search';

const styles = theme => ({
  root: {
    fontFamily: theme.typography.fontFamily,
    position: 'relative',
    marginRight: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit,
    borderRadius: 2,
    background: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      background: fade(theme.palette.common.white, 0.25),
    },
    '& $inputInput': {
      transition: theme.transitions.create('width'),
      width: 220,
      // '&:focus': {
      //   width: 170,
      // },
    },
  },
  search: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: `${theme.spacing.unit}px ${theme.spacing.unit}px ${theme.spacing.unit}px ${theme
      .spacing.unit}px`,
  }
});

const AppSearch = ({ classes, width }) => (
  <div className={classes.root} style={{ display: 'block', marginLeft: 8*3 }}>
    {/* <div className={classes.search}>
      <Icon>search</Icon>
    </div> */}
    <Input
      disableUnderline
      placeholder="Search…"
      id="docsearch-input"
      inputRef={ref => {
        this.inputRef = ref;
      }}
      classes={{
        root: classes.inputRoot,
        input: classes.inputInput,
      }}
    />
  </div>
)

export default withStyles(styles)(AppSearch);
