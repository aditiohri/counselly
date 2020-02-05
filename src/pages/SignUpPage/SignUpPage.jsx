import React, { Component } from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import "./SignUpPage.css";

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
        <SignUpForm {...this.props} updateMessage={this.updateMessage} />
        <p>{this.state.message}</p>
      </>
    );
  }
}

export default SignUpPage;