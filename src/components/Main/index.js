import React from "react";
import { NetInfo, StatusBar, View } from "react-native";
import { createAppContainer, createStackNavigator } from "react-navigation";
import NoNetwork from "../../components/NoNetwork";
import AuthScreen from "../../containers/AuthScreen";
import HomeScreen from "../../containers/HomeScreen";
import ManageCasteScreen from "../../containers/ManageCasteScreen";
import ManageFamilyScreen from "../../containers/ManageFamilyScreen";
import ManageProfileScreen from "../../containers/ManageProfileScreen";
import UserDetailScreen from "../../containers/UserDetailScreen";

const getAppNavigator = auth => {
  const initialRouteName = getInitialScreen(auth);

  return createStackNavigator(
    {
      HomeScreen: { screen: HomeScreen },
      AuthScreen: { screen: AuthScreen },
      ManageProfileScreen: { screen: ManageProfileScreen },
      ManageCasteScreen: { screen: ManageCasteScreen },
      ManageFamilyScreen: { screen: ManageFamilyScreen },
      UserDetailScreen: { screen: UserDetailScreen },
    },
    {
      initialRouteName,
      defaultNavigationOptions: {
        header: null
      }
    }
  );
};

const getInitialScreen = auth => {
  const { authUser } = auth;

  if (authUser) {
    const { caste_updated, profile_updated } = authUser;

    if (!caste_updated) {
      return "ManageCasteScreen";
    }

    if (!profile_updated) {
      return "ManageProfileScreen";
    }

    return "HomeScreen";
  }

  return "AuthScreen";
};

export default class Main extends React.Component {
  componentWillMount() {
    NetInfo.addEventListener("connectionChange", netInfo => {
      return this.props.handleNetworkChange(netInfo);
    });
  }

  render() {
    const { network, auth } = this.props;
    const { connection } = network;
    const { authInitialized } = auth;

    const AppNavigator = getAppNavigator(auth);
    const AppContainer = createAppContainer(AppNavigator);

    const noConnection = connection && connection.type === "none";
    const hasConnection = connection && connection.type !== "none";

    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="#d80402" barStyle="light-content" />
        {noConnection && <NoNetwork />}
        {hasConnection && authInitialized && <AppContainer />}
      </View>
    );
  }
}
