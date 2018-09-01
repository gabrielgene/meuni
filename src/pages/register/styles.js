import { withStyles } from '@material-ui/core/styles';

export const withIndexStyle = withStyles(theme => ({
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
  },
}));

    // const selectStyles = {
    //   input: base => ({
    //     ...base,
    //     color: theme.palette.text.primary,
    //   }),
    // };
