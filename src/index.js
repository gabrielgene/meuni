import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { blue, pink } from '@material-ui/core/colors';

import Login from './pages/login';
import Home from './pages/home';
import Profile from './pages/profile';
import Register from './pages/register';
import Folder from './pages/folder';
import Configurations from './pages/configurations';
import Post from './pages/post';

// import registerServiceWorker from './registerServiceWorker';

import './index.css';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: pink,
  },
});


const App = () => (
  <MuiThemeProvider theme={theme}>
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/cadastro" component={() => <h1>Test</h1>} />
        <Route path="/inicio" component={Home} />
        <Route exact path="/sub/:subId" component={Folder} />
        <Route path="/post/:postId" component={Post} />
        <Route path="/registre-se" component={Register} />
        <Route path="/perfil/:name" component={Profile} />
        <Route path="/configuracoes" component={Configurations} />
      </Switch>
    </Router>
  </MuiThemeProvider>
)

ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
