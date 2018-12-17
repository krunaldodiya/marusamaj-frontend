import { View } from "native-base";
import React from "react";
import Loader from "../../components/shared/Loader";
import FamilyForm from "./form_family";
import TermsHeader from "./header";
import styles from "./styles";

class ManageFamily extends React.Component {
  render() {
    const { auth } = this.props;

    return (
      <View style={styles.container}>
        <Loader loading={auth.loading} />
        <TermsHeader {...this.props} />
        <FamilyForm {...this.props} />
      </View>
    );
  }
}

export default ManageFamily;
