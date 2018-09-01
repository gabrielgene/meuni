import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { blue, pink } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';

import Login from './pages/login';
import Home from './pages/home';
import Profile from './pages/profile';
import Register from './pages/register';
import Folder from './pages/folder';
import Configurations from './pages/configurations';
import Notifications from './pages/notifications';
import Search from './pages/search';
import Post from './pages/post';
import Reply from './pages/reply';

import registerServiceWorker from './registerServiceWorker';

import './index.css';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: pink,
  },
});

const styles = theme => ({
  root: {
    [theme.breakpoints.up('md')]: {
      padding: '0 200px',
    },
  },
});

const App = ({ classes }) => (
  <MuiThemeProvider theme={theme}>
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/cadastro" component={() => <h1>Test</h1>} />
        <Route path="/inicio" component={Home} />
        <Route exact path="/diretorio/:folder" component={Folder} />
        <Route path="/post/:postId" component={Post} />
        <Route path="/registre-se" component={Register} />
        <Route path="/perfil/:name" component={Profile} />
        <Route path="/configuracoes" component={Configurations} />
        <Route path="/notificacoes" component={Notifications} />
        <Route path="/busca" component={Search} />
        <Route path="/comentario/:postId" component={Reply} />
      </Switch>
    </Router>
  </MuiThemeProvider>
);

const Enhanced = withStyles(styles, { withTheme: true })(App);

ReactDOM.render(<Enhanced />, document.getElementById('root'));
registerServiceWorker();
