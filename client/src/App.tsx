import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './pages/Login/login';
import Dashboard from './pages/doctor';

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
      </Switch>
    </Router>
  );
}

export default App;
