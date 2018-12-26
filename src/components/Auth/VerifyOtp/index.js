import React from "react";
import { KeyboardAvoidingView, SafeAreaView } from "react-native";
import Loader from "../../../components/shared/Loader";
import VerifyOtpForm from "./form";
import Info from "./info";
import styles from "./styles";
import Timer from "./timer";

class VerifyOtp extends React.Component {
  render() {
    const { otp, navigation } = this.props;
    const { loading, mobile } = otp;

    return (
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          behavior="position"
          enabled
          style={{ flex: 1 }}
          contentContainerStyle={{ flex: 1 }}
        >
          <Loader loading={loading} />
          <Info mobile={mobile} />
          <Timer navigation={navigation} />
          <VerifyOtpForm {...this.props} />
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

export default VerifyOtp;
