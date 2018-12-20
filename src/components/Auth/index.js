import React from "react";
import { KeyboardAvoidingView, SafeAreaView } from "react-native";
// component
import Loader from "../shared/Loader";
import LoginForm from "./Login/login_form";
import RegisterForm from "./Register/register_form";

class Auth extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      type: "login"
    };
  }

  toggleForm = type => {
    this.setState({ type });
  };

  render() {
    const { guest } = this.props;
    const { type } = this.state;

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          behavior="position"
          enabled
          style={{ flex: 1 }}
          contentContainerStyle={{ flex: 1 }}
        >
          <Loader loading={guest.loading} />
          {type === "login" && (
            <LoginForm {...this.props} toggleForm={this.toggleForm} />
          )}
          {type === "register" && (
            <RegisterForm {...this.props} toggleForm={this.toggleForm} />
          )}
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

export default Auth;
