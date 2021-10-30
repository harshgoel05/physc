import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './pages/Login/login';
import Dashboard from './pages/doctor';
import Post from './pages/Post';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Login />
        </Route>
        <Route path='/dashboard' exact>
          <Dashboard />
        </Route>
        <Route path='/post' exact>
          <Post />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
