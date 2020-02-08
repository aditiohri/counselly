import React, { Component } from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import {Box} from 'grommet';

const AppBar = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='center'
    background='brand'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
    style={{ zIndex: '1' }}
    {...props}
  />
)

class SignUpPage extends Component {
  constructor(props) {
    super(props);
    this.state = { message: "" };
  }

  updateMessage = msg => {
    this.setState({ message: msg });
  };

  render() {
    return (
      <>
      <AppBar>
        <header className="header-footer">Sign Up</header>
      </AppBar>
         <Box 
        direction='column' 
        flex 
        align="center"
        basis="medium"
        >
            <SignUpForm {...this.props} updateMessage={this.updateMessage} />
            <p>{this.state.message}</p>
        </Box>
      </>
    );
  }
}

export default SignUpPage;