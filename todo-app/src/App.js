import React, { Component} from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import jwtDecode from 'jwt-decode'; 
import 'react-toastify/dist/ReactToastify.css';

import Home from './pages/home';
import Register from './pages/register';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import './App.css';

class App extends Component {
  state = {  }
  
  componentDidMount() {
    try {
      const jwt = localStorage.getItem('token');
      const user = jwtDecode(jwt);
      this.setState({ user });
    } catch (ex) {}
  }

  render() { 
    return (
      <div className="App">
        <ToastContainer />
        <Switch>
          <Route
            path="/register"
            render={props => {
              if (localStorage.getItem('token')) return <Redirect to='/dashboard'/>
              return <Register history={props.history}/>
            }}
          />
          <Route
            path="/login"
            render={props => {
              if (localStorage.getItem('token')) return <Redirect to='/dashboard'/>
              return <Login history={props.history}/>
            }}
          />
          <Route
            path="/dashboard"
            render={props => {
              if (!localStorage.getItem('token')) return <Redirect to='/'/>
              return <Dashboard history={props.history} />
            }}
          />
          <Route
            path="/" 
            render={props => {
              if (localStorage.getItem('token')) return <Redirect to='/dashboard'/>
              return <Home/>
            }}
          />
        </Switch>
      </div>
    );
  }
}
 
export default App;
