import { Spinner } from "native-base";
import React from "react";
import { View } from "react-native";
import { getInitialScreen } from "../../libs/screen";
import { getAuthMobile } from "../../services";
import styles from "./styles";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authMobile: null,
      authUser: null
    };
  }

  async componentDidMount() {
    const authMobile = await getAuthMobile();

    this.setState({ authMobile });
  }

  componentWillReceiveProps(props) {
    const { init, auth } = props;
    const { authUser } = auth;

    if (init.initialized) {
      this.setState({ authUser }, () => {
        return this.initialRoute(props);
      });
    }
  }

  initialRoute = props => {
    const { authMobile, authUser } = this.state;
    const { navigation } = props;

    const screen = getInitialScreen(authUser, authMobile);
    navigation.replace(screen);
  };

  render() {
    return (
      <View style={styles.container}>
        <Spinner color="black" size="small" />
      </View>
    );
  }
}

export default Main;
