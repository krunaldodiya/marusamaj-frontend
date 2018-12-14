import React from "react";
import { KeyboardAvoidingView } from "react-native";
import Loader from "../../components/shared/Loader";
import CasteForm from "./form_caste";
import styles from "./styles";

const ManageCaste = props => {
  return (
    <KeyboardAvoidingView behavior="position" enabled style={styles.container}>
      <Loader loading={props.auth.loading} />
      <CasteForm {...props} />
    </KeyboardAvoidingView>
  );
};

export default ManageCaste;
