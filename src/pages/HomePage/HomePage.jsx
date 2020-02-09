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
          {/* <Route
            exact
            path="/"
            render={() => (
              <HomePage
                user={this.state.user}
                handleLogout={this.handleLogout}
              />
            )}
          /> */}
          <Route
            exact
            path="/add-appointment"
            render={() => 
            props.user ?
            <>
              <AddApptPage
                user={props.user}
                handleAddAppt={props.handleAddAppt}
                appts={props.appts}
                clients={props.clients}
              />
              </>
              :
              <Redirect to='/login'/>
            }/>
          <Route
            exact
            path="/all-appointments"
            render={() => 
            props.user ?
            <>
              <ApptListPage
                user={props.user}
                handleDeleteAppt={props.handleDeleteAppt}
                appts={props.appts}
              />
              </>
              :
              <Redirect to='/login'/>
            }/>
             <Route
            exact
            path="/details"
            render={({location}) => 
            props.user ?
            <>
              <ApptDetailPage
                location={location}
                user={props.user}
                handleDeleteAppt={props.handleDeleteAppt}
                handleAddNote={props.handleAddNote}
                handleDeleteNote={props.handleDeleteNote}
                appts={props.appts}
                notes={props.notes}
              />
              </>
              :
              <Redirect to='/login'/>
            }/>
            <Route
            exact
            path="/add-note"
            render={({location}) => 
            props.user ?
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
              :
              <Redirect to='/login'/>
            }/>
         
             <Route
            exact
            path="/edit"
            render={({location}) => 
            props.user ?
            <>
              <EditApptPage
                location={location}
                user={props.user}
                handleUpdateAppt={props.handleUpdateAppt}
                appts={props.appts}
                clients={props.clients}
              />
              </>
              :
              <Redirect to='/login'/>
            }/>
            
            <Route
            exact
            path="/add-client"
            render={() => 
            props.user ?
            <>
              <AddClientPage
                user={props.user}
                handleAddClient={props.handleAddClient}
                clients={props.clients}
              />
              </>
              :
              <Redirect to='/login'/>
            }/>
          <Route
            exact
            path="/all-clients"
            render={() => 
            props.user ?
            <>
              <ClientListPage
                user={props.user}
                handleDeleteClient={props.handleDeleteClient}
                clients={props.clients}
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