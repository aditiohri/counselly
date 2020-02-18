import React, { Component } from 'react';
import { withRouter } from 'react-router';
import * as appointmentAPI from '../../services/appointments-api';
import * as clientAPI from '../../services/clients-api';
import * as noteAPI from '../../services/notes-api';
import userService from '../../utils/userService';
import HomePage from '../HomePage/HomePage';
import NavBar from '../../components/NavBar/NavBar'
import { Footer, Grommet, Text, Main, Anchor, Box } from 'grommet';
import { Twitter, Linkedin, Github } from 'grommet-icons';
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

const Media = () => (
  <Box direction="row" gap="xxsmall" justify="center">
    <Anchor 
      a11yTitle="Find me on Twitter"
      href="https://twitter.com/aditi_ohri"
      icon={<Twitter color="brand"/>}
    />
    <Anchor 
      a11yTitle="Check out my code on Github"
      href="https://github.com/aditiohri/"
      icon={<Github color="brand"/>}
    />
    <Anchor 
      a11yTitle="Connect with me on LinkedIn"
      href="https://www.linkedin.com/in/aditi-ohri/"
      icon={<Linkedin color="brand"/>}
    />
  </Box>
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
      const newNote = await appointmentAPI.addNote(newNoteData, id);
      console.log('thanks add note!')
      const newApptArray = this.state.appointments.map(a => a._id === id ? a.notes = [...a.notes, {newNote}] : a)
      this.setState(state => ({
        appointments: newApptArray
      }),
      // console.log(this.state.appointments))
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
        <Main>
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
        </Main>
        <Footer background="dark-4" justify="center" pad="small">
          <Text textAlign="center" size="small">
          <Media />
            © 2020 Copyright Aditi Ohri
          </Text>
        </Footer>      
      </Grommet>
    );
  }
}


export default withRouter(App);
