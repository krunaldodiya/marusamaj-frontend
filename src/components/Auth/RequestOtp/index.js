import React from "react";
import { KeyboardAvoidingView, SafeAreaView } from "react-native";
// component
import Loader from "../../../components/shared/Loader";
import RequestOtpForm from "./form";
import Info from "./info";
// styles
import styles from "./styles";

class RequestOtp extends React.Component {
  render() {
    const { otp } = this.props;
    const { loading } = otp;

    return (
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          behavior="position"
          enabled
          style={{ flex: 1 }}
          contentContainerStyle={{ flex: 1 }}
        >
          <Loader loading={loading} />
          <Info />
          <RequestOtpForm {...this.props} />
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

export default RequestOtp;
