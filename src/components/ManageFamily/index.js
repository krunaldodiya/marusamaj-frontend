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

  updateProfile = item => {
    const authUser = {
      ...this.state.authUser,
      caste_id: item.caste_id,
      sub_caste_id: item.id
    };

    this.setState({ authUser });
  };

  render() {
    const { authUser } = this.state;
    const { auth } = this.props;

    return (
      <View style={styles.container}>
        <Loader loading={auth.loading} />
        <TermsHeader {...this.props} authUser={authUser} />
        <FamilyForm
          {...this.props}
          authUser={authUser}
          updateProfile={this.updateProfile}
        />
      </View>
    );
  }
}

export default ManageFamily;
