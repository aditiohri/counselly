import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';
import * as appointmentAPI from '../../services/appointments-api';
import * as clientAPI from '../../services/clients-api';
import * as noteAPI from '../../services/notes-api';
import userService from '../../utils/userService';
import SignUpPage from '../SignUpPage/SignUpPage';
import LoginPage from '../LoginPage/LoginPage';
import HomePage from '../HomePage/HomePage';
import AddApptPage from '../AddApptPage/AddApptPage';
import AddNote from '../../components/AddNote/AddNote';
import EditApptPage from '../EditApptPage/EditApptPage';
import ApptListPage from '../ApptListPage/ApptListPage';
import ApptDetailPage from '../ApptDetailPage/ApptDetailPage';
import AddClientPage from '../AddClientPage/AddClientPage';
import ClientListPage from '../ClientListPage/ClientListPage';
import { Box, Grommet } from 'grommet';

const theme = {
  global: {
    colors: {
      brand: '#80ffa1'
    },
    font: {
      family: 'Kalam',
      size: '18px',
      height: '20px'
    }
  }
}

const AppBar = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
    style={{ zIndex: '1' }}
    {...props}
  />
)

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      appointments: [],
      clients: []
    };
  }

  handleAddAppt = async newApptData => {
    const newAppt = await appointmentAPI.create(newApptData);
    this.setState(state => ({
      appointments: [...state.appointments, newAppt]
    }),
    () => this.props.history.push('/all-appointments'))
  }

  handleAddClient = async newClientData => {
    console.log('from handleAddClient: ', newClientData)
    const newClient = await clientAPI.create(newClientData);
    this.setState(state => ({
      clients: [...state.clients, newClient]
    }),
    () => this.props.history.push('/all-clients'))
  }

    handleAddNote = async (newNoteData, id) => {
      console.log('hello from handleAddNote - id: ', id)
      await appointmentAPI.addNote(newNoteData, id);
      this.setState(state=> ({
        appointments: [...state.appointments]
      }),
      () => this.props.history.push('/all-appointments'))
  }
    handleUpdateAppt = async updatedApptData => {
    const updatedAppt = await appointmentAPI.update(updatedApptData);
    const newApptArray = this.state.appointments.map(a => 
      a._id === updatedAppt._id ? updatedAppt : a
    );
    this.setState(
      {appointments: newApptArray},
      () => this.props.history.push('/all-appointments')
    );
  }

  handleDeleteNote = async id => {
    await noteAPI.deleteNote(id);
    this.setState(state => ({
      appointments: state.appointments
    }), () => this.props.history.push('/all-appointments'))
  }

  handleDeleteAppt = async id => {
    await appointmentAPI.deleteOne(id);
    this.setState(state => ({
      appointments: state.appointments.filter(a => a._id !== id)
    }), () => this.props.history.push('/all-appointments'))
  }


  handleDeleteClient = async id => {
    await clientAPI.deleteOne(id);
    this.setState(state => ({
      clients: state.clients.filter(a => a._id !== id)
    }), () => this.props.history.push('/all-clients'))
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
    const clients = await clientAPI.getAll();
    this.setState({appointments, clients})
  }

  render() {
    return (
      <Grommet theme={theme}>
      <AppBar>
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
                clients={this.state.clients}
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
            path="/details"
            render={({location}) => 
            userService.getUser() ?
            <>
            <HomePage
                user={this.state.user}
                handleLogout={this.handleLogout}
              />
              <ApptDetailPage
                location={location}
                user={this.state.user}
                handleDeleteAppt={this.handleDeleteAppt}
                handleAddNote={this.handleAddNote}
                handleDeleteNote={this.handleDeleteNote}
                appts={this.state.appointments}
                notes={this.state.notes}
              />
              </>
              :
              <Redirect to='/login'/>
            }/>
            <Route
            exact
            path="/add-note"
            render={({location}) => 
            userService.getUser() ?
            <>
            <HomePage
                user={this.state.user}
                handleLogout={this.handleLogout}
              />
              <ApptDetailPage
                location={location}
                user={this.state.user}
                handleDeleteAppt={this.handleDeleteAppt}
                handleAddNote={this.handleAddNote}
                handleDeleteNote={this.handleDeleteNote}
                appts={this.state.appointments}
                notes={this.state.notes}
              />
               <AddNote 
                location={location}
                handleAddNote={this.handleAddNote}
                handleUpdateAppt={this.handleUpdateAppt}
                appts={this.state.appointments}
                notes={this.state.notes}
                key={this.state.appointments}
              />
              </>
              :
              <Redirect to='/login'/>
            }/>
         
             <Route
            exact
            path="/edit"
            render={({location}) => 
            userService.getUser() ?
            <>
            <HomePage
                user={this.state.user}
                handleLogout={this.handleLogout}
              />
              <EditApptPage
                location={location}
                user={this.state.user}
                handleUpdateAppt={this.handleUpdateAppt}
                appts={this.state.appointments}
                clients={this.state.clients}
              />
              </>
              :
              <Redirect to='/login'/>
            }/>
            
            <Route
            exact
            path="/add-client"
            render={() => 
            userService.getUser() ?
            <>
            <HomePage
                user={this.state.user}
                handleLogout={this.handleLogout}
              />
              <AddClientPage
                user={this.state.user}
                handleAddClient={this.handleAddClient}
                clients={this.state.clients}
              />
              </>
              :
              <Redirect to='/login'/>
            }/>
          <Route
            exact
            path="/all-clients"
            render={() => 
            userService.getUser() ?
            <>
            <HomePage
                user={this.state.user}
                handleLogout={this.handleLogout}
              />
              <ClientListPage
                user={this.state.user}
                handleDeleteClient={this.handleDeleteClient}
                clients={this.state.clients}
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
        </AppBar>
      </Grommet>
    );
  }
}


export default withRouter (App);
