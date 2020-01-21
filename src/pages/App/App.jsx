import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router'
import * as appointmentAPI from '../../services/appointments-api'
import userService from '../../utils/userService';
import SignUpPage from '../SignUpPage/SignUpPage';
import LoginPage from '../LoginPage/LoginPage';
import HomePage from '../HomePage/HomePage';
import AddApptPage from '../AddApptPage/AddApptPage';
import ApptListPage from '../ApptListPage/ApptListPage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      appointments: []
    };
  }

  handleAddAppt = async newApptData => {
    const newAppt = await appointmentAPI.create(newApptData);
    this.setState(state => ({
      appointments: [...state.appointments, newAppt]
    }),
    () => this.props.history.push('/all-appointments'))
  }

  handleDeleteAppt = async id => {
    await appointmentAPI.deleteOne(id);
    this.setState(state => ({
      appointments: state.appointments.filter(a => a._id !== id)
    }), () => this.props.history.push('/all-appointments'))
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  handleSignuporLogin = () => {
    this.setState({ user: userService.getUser() });
  };

  async componentDidMount() {
    const appointments = await appointmentAPI.getAll();
    this.setState({appointments})
  }

  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <HomePage
                user={this.state.user}
                handleLogout={this.handleLogout}
              />
            )}
          />
          <Route
            exact
            path="/add-appointment"
            render={() => 
            userService.getUser() ?
            <>
            <HomePage
                user={this.state.user}
                handleLogout={this.handleLogout}
              />
              <AddApptPage
                user={this.state.user}
                handleAddAppt={this.handleAddAppt}
                appts={this.state.appointments}
              />
              </>
              :
              <Redirect to='/login'/>
            }/>
          <Route
            exact
            path="/all-appointments"
            render={() => 
            userService.getUser() ?
            <>
            <HomePage
                user={this.state.user}
                handleLogout={this.handleLogout}
              />
              <ApptListPage
                user={this.state.user}
                handleDeleteAppt={this.handleDeleteAppt}
                appts={this.state.appointments}
              />
              </>
              :
              <Redirect to='/login'/>
            }/>
          <Route
            exact
            path="/signup"
            render={({ history }) => (
              <SignUpPage
                history={history}
                handleSignuporLogin={this.handleSignuporLogin}
              />
            )}
          />
          <Route
            exact
            path="/login"
            render={({ history }) => (
              <LoginPage
                history={history}
                handleSignuporLogin={this.handleSignuporLogin}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}


export default withRouter (App);
