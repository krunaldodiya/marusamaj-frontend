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
      authUser: props.auth.authUser
    };
  }

  componentWillReceiveProps(props) {
    const { auth } = props;
    const { authUser, errors } = auth;

    this.setState({ authUser, errors });
  }

  updateUserData = item => {
    const { authUser } = this.state;

    this.setState({
      authUser: { ...authUser, ...item }
    });
  };

  render() {
    const { authUser } = this.state;
    const { auth } = this.props;
    const { loading } = auth;

    return (
      <View style={styles.container}>
        <Loader loading={loading} />
        <TermsHeader {...this.props} authUser={authUser} />
        <CasteForm
          {...this.props}
          authUser={authUser}
          updateUserData={this.updateUserData}
        />
      </View>
    );
  }
}

export default ManageCaste;
