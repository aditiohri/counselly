import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import { Box } from 'grommet';
import "./HomePage.css";

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


const HomePage = props => {
  return (
    <div className="HomePage">
      <AppBar>
      <NavBar 
      user={props.user} 
      handleLogout={props.handleLogout} 
      />
      </AppBar>

    </div>
  );
};

export default HomePage;