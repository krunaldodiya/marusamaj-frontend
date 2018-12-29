import React from "react";
import { NetInfo } from "react-native";
import { createAppContainer, createStackNavigator } from "react-navigation";
import { Provider } from "react-redux";
import NoNetwork from "./src/components/NoNetwork";
import AccountListScreen from "./src/containers/AccountListScreen";
import AddRelationScreen from "./src/containers/AddRelationScreen";
import AvatarScreen from "./src/containers/AvatarScreen";
import ManageCasteScreen from "./src/containers/ManageCasteScreen";
import ManageFamilyScreen from "./src/containers/ManageFamilyScreen";
import ManageProfileScreen from "./src/containers/ManageProfileScreen";
import RequestOtpScreen from "./src/containers/RequestOtpScreen";
import SearchScreen from "./src/containers/SearchScreen";
import SettingsScreen from "./src/containers/SettingsScreen";
import TabsScreen from "./src/containers/TabsScreen";
import UserDetailScreen from "./src/containers/UserDetailScreen";
import VerifyOtpScreen from "./src/containers/VerifyOtpScreen";
import { getInitialScreen } from "./src/libs/screen";
import { getAuthMobile } from "./src/services";
import { store } from "./src/store";
import { handleNetworkChange } from "./src/store/actions";

const getAppNavigator = initialRouteName => {
  return createStackNavigator(
    {
      TabsScreen: { screen: TabsScreen },
      ManageProfileScreen: { screen: ManageProfileScreen },
      ManageCasteScreen: { screen: ManageCasteScreen },
      ManageFamilyScreen: { screen: ManageFamilyScreen },
      UserDetailScreen: { screen: UserDetailScreen },
      AvatarScreen: { screen: AvatarScreen },
      SearchScreen: { screen: SearchScreen },
      SettingsScreen: { screen: SettingsScreen },
      AddRelationScreen: { screen: AddRelationScreen },
      RequestOtpScreen: { screen: RequestOtpScreen },
      VerifyOtpScreen: { screen: VerifyOtpScreen },
      AccountListScreen: { screen: AccountListScreen }
    },
    {
      initialRouteName,
      defaultNavigationOptions: {
        header: null
      }
    }
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authMobile: null,
      connection: null,
      authUser: null,
      initialized: null
    };
  }

  componentWillMount() {
    NetInfo.addEventListener("connectionChange", netInfo => {
      this.setState({ connection: netInfo }, () => {
        store.dispatch(handleNetworkChange(netInfo));
      });
    });
  }

  async componentDidMount() {
    const authMobile = await getAuthMobile();

    this.unsubscribe = store.subscribe(() => {
      const { network, auth, init } = store.getState();

      const { connection } = network;
      const { authUser } = auth;
      const { initialized } = init;

      if (initialized) {
        this.unsubscribe();
        this.setState({ authMobile, connection, authUser, initialized });
      }
    });
  }

  render() {
    const { connection, authUser, authMobile, initialized } = this.state;

    if (!initialized) {
      return false;
    }

    const noConnection = connection && connection.type === "none";
    const hasConnection = connection && connection.type !== "none";

    const initialRouteName = getInitialScreen(authUser, authMobile);
    const AppNavigator = getAppNavigator(initialRouteName);
    const AppContainer = createAppContainer(AppNavigator);

    return (
      <Provider store={store}>
        <React.Fragment>
          {noConnection && <NoNetwork />}
          {hasConnection && initialized && <AppContainer />}
        </React.Fragment>
      </Provider>
    );
  }
}

export default App;
