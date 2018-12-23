import React from "react";
import { KeyboardAvoidingView, SafeAreaView } from "react-native";
// component
import Loader from "../../shared/Loader";
import LoginForm from "./reset_form";
import LoginInfo from "./reset_info";

class ResetPassword extends React.Component {
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

export default ResetPassword;
