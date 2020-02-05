import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { 
  Grommet, 
  Box, 
  Button, 
  Collapsible, 
  ResponsiveContext } 
from 'grommet';
import { Menu } from 'grommet-icons'

const AppBar = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='space-around'
    background='#80ffa1'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
    style={{ zIndex: '1' }}
    {...props}
  />
)

const NavBar = props => {
  let nav = props.user ? (
    <>
      <span className="NavBar-welcome">Welcome, {props.user.name}</span>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link className="NavBar-Link" to="/add-appointment">Add Appointment</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link className="NavBar-Link" to="/all-appointments">All Appointments</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link className="NavBar-Link" to="/add-client">Add Client</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link className="NavBar-Link" to="/all-clients">All Clients</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to="" className="NavBar-link" onClick={props.handleLogout}>
        LOG OUT
      </Link>
    </>
  ) : (
    <>
      <Link to="/login" className="NavBar-link">
        LOG IN
      </Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to="/signup" className="NavBar-link">
        SIGN UP
      </Link>
    </>
  );

  const [open, setOpen] = useState(false)

  return     (
    <Grommet>
      <ResponsiveContext.Consumer>
      {size => (
        <Box fill>
        {(size === 'small') ? (
          <Box>
          <Button 
            icon={<Menu />}
            onClick={() => setOpen(!open)}
          /> 
          <Collapsible open={open}>
          {nav}
          </Collapsible>
          </Box>
        ): (
        <AppBar>
        {nav}
        </AppBar>
        )}
        </Box>
      )}
      </ResponsiveContext.Consumer>
    </Grommet>
  )
  ;
};

export default NavBar;