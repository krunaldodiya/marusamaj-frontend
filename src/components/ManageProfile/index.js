import { View } from "native-base";
import React from "react";
import Loader from "../../components/shared/Loader";
import ProfileForm from "./form_profile";
import TermsHeader from "./header";
import styles from "./styles";

class ManageProfile extends React.Component {
  render() {
    const { auth } = this.props;

    return (
      <View style={styles.container}>
        <Loader loading={auth.loading} />
        <TermsHeader {...this.props} />
        <ProfileForm {...this.props} />
      </View>
    );
  }
}

export default ManageProfile;
