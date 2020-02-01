import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
// wireframes -> html -> semantic tags -> containers
// general -> specific
// flexbox only styles first level children/content
// width = calc(100% - Xpx / Y) where X = total amount of space around/between that tag/tem and Y = number of tags or items
//wrap navlinks in a div tag that has a media query tag
//<nav> tag wraps nav bar
// create a main css file for app
// this file contains styles for every item, globally
// three flexbox columns nav . main. footer
// margin 0 for body and restore * (first level) ** defaults

const NavBar = props => {
  let nav = props.user ? (
    <div>
      <span className="NavBar-welcome">WELCOME, {props.user.name}</span>
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
    </div>
  ) : (
    <div>
      <Link to="/login" className="NavBar-link">
        LOG IN
      </Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to="/signup" className="NavBar-link">
        SIGN UP
      </Link>
    </div>
  );

  return <div className="NavBar flex-h align-flex-end header-footer">{nav}</div>;
};

export default NavBar;