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
      casteData: {
        caste_id: props.auth.authUser.caste_id,
        sub_caste_id: props.auth.authUser.sub_caste_id
      }
    };
  }

  updateUserData = data => {
    this.setState({ casteData: { ...this.state.casteData, ...data } });
  };

  render() {
    const { auth } = this.props;
    const { authUser } = auth;
    const { casteData } = this.state;

    return (
      <View style={styles.container}>
        <Loader loading={auth.loading} />
        <TermsHeader
          {...this.props}
          casteData={casteData}
          authUser={authUser}
        />
        <CasteForm
          {...this.props}
          casteData={casteData}
          updateUserData={this.updateUserData}
        />
      </View>
    );
  }
}

export default ManageCaste;
