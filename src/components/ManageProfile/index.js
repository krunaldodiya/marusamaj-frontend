import React from "react";
import { KeyboardAvoidingView, SafeAreaView } from "react-native";
import Loader from "../../components/shared/Loader";
import ProfileForm from "./form_profile";
import TermsHeader from "./header";

class ManageProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      avoidKeyboard: false,
      authUser: props.auth.authUser,
      errors: props.auth.errors
    };
  }

  updateUserData = item => {
    const { authUser } = this.state;

    this.setState({
      authUser: { ...authUser, ...item }
    });
  };

  avoidKeyboardView = avoidKeyboard => {
    this.setState({ avoidKeyboard });
  };

  render() {
    const { auth } = this.props;
    const { avoidKeyboard, authUser, errors } = this.state;

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          behavior="position"
          enabled={avoidKeyboard}
          style={{ flex: 1 }}
          contentContainerStyle={{ flex: 1 }}
        >
          <Loader loading={auth.loading} />
          <TermsHeader {...this.props} authUser={authUser} errors={errors} />
          <ProfileForm
            {...this.props}
            authUser={authUser}
            errors={errors}
            updateUserData={this.updateUserData}
            avoidKeyboardView={this.avoidKeyboardView}
          />
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

export default ManageProfile;
