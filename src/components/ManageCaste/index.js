import { View } from "native-base";
import React from "react";
import Loader from "../../components/shared/Loader";
import CasteForm from "./form_caste";
import TermsHeader from "./header";
import styles from "./styles";

class ManageCaste extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: props.auth.authUser,
      errors: props.auth.errors
    };
  }

  updateUserData = item => {
    const { authUser } = this.state;

    this.setState({
      authUser: { ...authUser, caste_id: item.caste_id, sub_caste_id: item.id }
    });
  };

  render() {
    const { auth } = this.props;
    const { authUser, errors } = this.state;

    return (
      <View style={styles.container}>
        <Loader loading={auth.loading} />
        <TermsHeader {...this.props} authUser={authUser} errors={errors} />
        <CasteForm
          {...this.props}
          authUser={authUser}
          errors={errors}
          updateUserData={this.updateUserData}
        />
      </View>
    );
  }
}

export default ManageCaste;
