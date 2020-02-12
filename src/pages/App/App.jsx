import React, { Component } from 'react';
import { withRouter } from 'react-router';
import * as appointmentAPI from '../../services/appointments-api';
import * as clientAPI from '../../services/clients-api';
import * as noteAPI from '../../services/notes-api';
import userService from '../../utils/userService';
import HomePage from '../HomePage/HomePage';
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import { Grommet } from 'grommet';
import './App.css';

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
      const newNote = await appointmentAPI.addNote(newNoteData, id);
      console.log('thanks add note!')
      const newApptArray = this.state.appointments.map(a => a._id === id ? a.notes = [...a.notes, {newNote}] : a)
      this.setState(state => ({
        appointments: newApptArray
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
        <NavBar 
          user={this.state.user}
          handleLogout={this.handleLogout}
        />
        <HomePage 
          user={this.state.user}
          clients={this.state.clients}
          appts={this.state.appointments}
          handleSignuporLogin={this.handleSignuporLogin}
          handleLogout={this.handleLogout}
          handleAddAppt={this.handleAddAppt}
          handleDeleteAppt={this.handleDeleteAppt}
          handleUpdateAppt={this.handleUpdateAppt}
          handleAddClient={this.handleAddClient}
          handleDeleteClient={this.handleDeleteClient}
          handleAddNote={this.handleAddNote}
          handleDeleteNote={this.handleDeleteNote}
        />
        <Footer />
      </Grommet>
    );
  }
}


export default withRouter(App);
