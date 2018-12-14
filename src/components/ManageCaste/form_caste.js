import { Text } from "native-base";
import React from "react";

class CasteForm extends React.Component {
  constructor(props) {
    super(props);

    const { authUser } = props.auth;
    const { city, state } = authUser;

    this.state = {
      loaded: false
    };
  }

  render() {
    const { auth, navigation } = this.props;
    const { errors, loading } = auth;
    const { authUser } = this.state;

    return <Text>hello</Text>;
  }
}

export default CasteForm;
