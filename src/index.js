import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { MuiThemeProvider } from 'material-ui/styles';
import { createMuiTheme } from 'material-ui/styles';
import { blue, pink } from 'material-ui/colors';

import Login from './pages/login';
import Home from './pages/home';
import Profile from './pages/profile';

import './index.css';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: pink,
  },
});

// import registerServiceWorker from './registerServiceWorker';

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Router>
      <div>
        <Route exact path="/" component={Login} />
        <Route path="/cadastro" component={() => <h1>Test</h1>} />
        <Route path="/inicio" component={Home} />
        <Route path="/perfil/:name" component={Profile} />
      </div>
    </Router>
  </MuiThemeProvider>
)

ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
