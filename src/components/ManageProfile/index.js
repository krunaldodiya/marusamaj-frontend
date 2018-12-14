import React from "react";
import { KeyboardAvoidingView } from "react-native";
import Loader from "../../components/shared/Loader";
import CasteForm from "./form_caste";
import FamilyForm from "./form_family";
import ProfileForm from "./form_profile";
import styles from "./styles";

const UserType = props => {
  return (
    <KeyboardAvoidingView behavior="position" enabled style={styles.container}>
      <Loader loading={props.auth.loading} />
      <CasteForm {...props} />
      <ProfileForm {...props} />
      <FamilyForm {...props} />
    </KeyboardAvoidingView>
  );
};

export default UserType;
