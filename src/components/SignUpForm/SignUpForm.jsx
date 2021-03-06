import React, { Component } from "react";
import userService from "../../utils/userService";
import { FormField, Form, Button, Box } from 'grommet';
import { Sign } from 'grommet-icons';

class SignUpForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    passwordConf: ""
  };

  handleChange = e => {
    this.props.updateMessage("");
    this.setState({
      // Using ES2015 Computed Property Names
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    try {
      await userService.signup(this.state);
      // let <App> know a user has signedup
      this.props.handleSignuporLogin();
      // Successfully signed up - show GamePage
      this.props.history.push("/");
    } catch (err) {
      // Invalid user data (probably duplicate email)
      this.props.updateMessage(err.message);
    }
  };

  isFormInvalid() {
    return !(
      this.state.name &&
      this.state.email &&
      this.state.password === this.state.passwordConf
    );
  }

  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
              <FormField
                type="text"
                label="Name:"
                value={this.state.name}
                name="name"
                required
                validate={{ 
                  regexp: /^[a-z]{2,}/i,
                  message: '3 or more letters - no numbers!'
                  }}
                onChange={this.handleChange}
              />
              <FormField
                label="Email:"
                type="email"
                placeholder="email@address.com"
                value={this.state.email}
                name="email"
                required
                validate={{
                  regexp: /^([\w.+]+)@([\w-]+\.)([\w]{2,})$/i,
                  message: "must include '@' and '.'"
                }}
                onChange={this.handleChange}
              />
              <FormField
                label="Password:"
                type="password"
                placeholder="Create Password"
                value={this.state.password}
                name="password"
                validate={{
                  regexp: /^(?=\D*\d)\S{6,}$/,
                  message: "must include at least 6 characters, including one number"
                }}
                onChange={this.handleChange}

              />
              <FormField
                type="password"
                placeholder="Confirm Password"
                value={this.state.passwordConf}
                name="passwordConf"
                onChange={this.handleChange}
              />
            <Box direction="row" justify="between" pad="medium">
              <Button
                primary
                label="Sign Up"
                disabled={this.isFormInvalid()}
                icon={<Sign />}
             />
              &nbsp;&nbsp;
                <Button
                  primary
                  color="#FF4B2B"
                  label="Cancel"
                  onClick={() => {this.props.history.replace('/')}}
                />
            </Box>
        </Form>
      </>
    );
  }
}

export default SignUpForm;