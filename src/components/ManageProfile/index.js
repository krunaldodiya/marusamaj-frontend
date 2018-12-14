import React from "react";
import { KeyboardAvoidingView } from "react-native";
import Loader from "../../components/shared/Loader";
import ProfileForm from "./form_profile";
import styles from "./styles";

const ManageProfile = props => {
  return (
    <KeyboardAvoidingView behavior="position" enabled style={styles.container}>
      <Loader loading={props.auth.loading} />
      <ProfileForm {...props} />
    </KeyboardAvoidingView>
  );
};

export default ManageProfile;
