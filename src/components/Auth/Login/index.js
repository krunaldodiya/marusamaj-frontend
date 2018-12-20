import React from "react";
import { KeyboardAvoidingView, SafeAreaView } from "react-native";
// component
import Loader from "../../shared/Loader";
import LoginForm from "./login_form";
import LoginInfo from "./login_info";

class Login extends React.Component {
  render() {
    const { guest } = this.props;

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          behavior="position"
          enabled
          style={{ flex: 1 }}
          contentContainerStyle={{ flex: 1 }}
        >
          <Loader loading={guest.loading} />
          <LoginInfo />
          <LoginForm {...this.props} />
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

export default Login;
