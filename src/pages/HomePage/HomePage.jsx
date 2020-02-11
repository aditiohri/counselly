import React from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';
import SignUpPage from '../SignUpPage/SignUpPage';
import LoginPage from '../LoginPage/LoginPage';
import AddApptPage from '../AddApptPage/AddApptPage';
import AddNote from '../../components/AddNote/AddNote';
import EditApptPage from '../EditApptPage/EditApptPage';
import ApptListPage from '../ApptListPage/ApptListPage';
import ApptDetailPage from '../ApptDetailPage/ApptDetailPage';
import AddClientPage from '../AddClientPage/AddClientPage';
import ClientListPage from '../ClientListPage/ClientListPage';
import "./HomePage.css";

const HomePage = props => {
  return (
    <>
        <Switch>
          <Route
            exact
            path="/add-appointment"
            render={() => (
              <AddApptPage
                user={props.user}
                handleAddAppt={props.handleAddAppt}
                appts={props.appts}
                clients={props.clients}
                options={props.clients.map(client => client.name)}
              />
            )}
          /> 
          <Route
            exact
            path="/all-appointments"
            render={() => (
              <ApptListPage
                user={props.user}
                handleDeleteAppt={props.handleDeleteAppt}
                appts={props.appts}
              />
              )}
            />
             <Route
            exact
            path="/details"
            render={({location}) => (
              <ApptDetailPage
                location={location}
                user={props.user}
                handleDeleteAppt={props.handleDeleteAppt}
                handleAddNote={props.handleAddNote}
                handleDeleteNote={props.handleDeleteNote}
                appts={props.appts}
                notes={props.notes}
              />
              )}
            />
            <Route
            exact
            path="/add-note"
            render={({location}) => (
              <>
              <ApptDetailPage
                location={location}
                user={props.user}
                handleDeleteAppt={props.handleDeleteAppt}
                handleAddNote={props.handleAddNote}
                handleDeleteNote={props.handleDeleteNote}
                appts={props.appts}
              />
               <AddNote 
                location={location}
                handleAddNote={props.handleAddNote}
                handleUpdateAppt={props.handleUpdateAppt}
                appts={props.appts}
                notes={props.notes}
                key={props.appts}
              />
              </>
              )}
            />
             <Route
            exact
            path="/edit"
            render={({location}) => (
              <EditApptPage
                location={location}
                user={props.user}
                handleUpdateAppt={props.handleUpdateAppt}
                appts={props.appts}
                clients={props.clients}
              />
              )}
            />
            <Route
            exact
            path="/add-client"
            render={() => (
              <AddClientPage
                user={props.user}
                handleAddClient={props.handleAddClient}
                clients={props.clients}
              />
              )}
            />
          <Route
            exact
            path="/all-clients"
            render={() => (
              <ClientListPage
                user={props.user}
                handleDeleteClient={props.handleDeleteClient}
                clients={props.clients}
              />
            )}
          />
          <Route
            exact
            path="/signup"
            render={({ history }) => (
              <SignUpPage
                history={history}
                handleSignuporLogin={props.handleSignuporLogin}
              />
            )}
          />
          <Route
            exact
            path="/login"
            render={({ history }) => (
              <LoginPage
                history={history}
                handleSignuporLogin={props.handleSignuporLogin}
              />
            )}
          />
        </Switch>
    </>
  );
};

export default withRouter(HomePage);