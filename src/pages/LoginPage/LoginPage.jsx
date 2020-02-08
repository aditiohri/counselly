import React, { Component } from "react";
import "./LoginPage.css";
import userService from "../../utils/userService";
import { FormField, Form, Button, Box } from 'grommet';
import { Login } from 'grommet-icons';

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


class LoginPage extends Component {
  state = {
    email: "",
    pw: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    try {
      await userService.login(this.state);
      // let <App> know a user has signedup
      this.props.handleSignuporLogin();
      // Successfully signed up - show GamePage
      this.props.history.push("/");
    } catch (err) {
      // Invalid user data (probably duplicate email)
      alert("Invalid Credentials!");
    }
  };

  render() {
    return (
      <>
      <AppBar>
      <header className="header-footer">Log In</header>
      </AppBar>
      <Box 
        direction='column' 
        flex 
        align="center"
        basis="medium"
        >
          <Box 
          flex 
          align="center"
          basis="medium"
          justify="center"
          >
        <Form onSubmit={this.handleSubmit}>
              <FormField
                label="Email:"
                type="email"
                placeholder="Email"
                value={this.state.email}
                name="email"
                onChange={this.handleChange}
              />
              <FormField
                label="Password:"
                type="password"
                placeholder="Password"
                value={this.state.pw}
                name="pw"
                onChange={this.handleChange}
              />
              <Box direction="row" justify="between" pad="medium">
                <Button 
                  primary
                  label="Log In"
                  icon={<Login />}
                  type="submit"
                />
                &nbsp;&nbsp;&nbsp;
                <Button
                  primary
                  color="#FF4B2B"
                  label="Cancel"
                  onClick={() => {this.props.history.replace('/')}}
                />
              </Box>
        </Form>
      </Box>
    </Box>
      </>
    );
  }
}

export default LoginPage;