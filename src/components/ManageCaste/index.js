import { View } from "native-base";
import React from "react";
import Loader from "../../components/shared/Loader";
import CasteForm from "./form_caste";
import TermsHeader from "./header";
import styles from "./styles";

const ManageCaste = props => {
  return (
    <View style={styles.container}>
      <Loader loading={props.auth.loading} />
      <TermsHeader />
      <CasteForm {...props} />
    </View>
  );
};

export default ManageCaste;
