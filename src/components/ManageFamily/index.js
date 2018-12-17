import { View } from "native-base";
import React from "react";
import Loader from "../../components/shared/Loader";
import FamilyForm from "./form_family";
import TermsHeader from "./header";
import styles from "./styles";

class ManageFamily extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: props.auth.authUser
    };
  }

  updateUserData = (key, value) => {
    const authUser = {
      ...this.state.authUser,
      [key]: value
    };

    this.props.setAuthUser({ authUser });
  };

  render() {
    const { auth } = this.props;

    return (
      <View style={styles.container}>
        <Loader loading={auth.loading} />
        <TermsHeader {...this.props} />
        <FamilyForm {...this.props} updateUserData={this.updateUserData} />
      </View>
    );
  }
}

export default ManageFamily;
