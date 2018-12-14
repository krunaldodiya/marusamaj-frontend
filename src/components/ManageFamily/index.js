import React from "react";
import { KeyboardAvoidingView } from "react-native";
import Loader from "../../components/shared/Loader";
import FamilyForm from "./form_family";
import styles from "./styles";

const ManageFamily = props => {
  return (
    <KeyboardAvoidingView behavior="position" enabled style={styles.container}>
      <Loader loading={props.auth.loading} />
      <FamilyForm {...props} />
    </KeyboardAvoidingView>
  );
};

export default ManageFamily;
