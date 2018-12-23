import React from "react";
import { NetInfo, View } from "react-native";
import { createAppContainer, createStackNavigator } from "react-navigation";
import AccountListScreen from "../../containers/AccountListScreen";
import AddRelationScreen from "../../containers/AddRelationScreen";
import AvatarScreen from "../../containers/AvatarScreen";
import LoginScreen from "../../containers/LoginScreen";
import ManageCasteScreen from "../../containers/ManageCasteScreen";
import ManageFamilyScreen from "../../containers/ManageFamilyScreen";
import ManageProfileScreen from "../../containers/ManageProfileScreen";
import RegisterScreen from "../../containers/RegisterScreen";
import RequestOtpScreen from "../../containers/RequestOtpScreen";
import ResetPasswordScreen from "../../containers/ResetPasswordScreen";
import SearchAccountScreen from "../../containers/SearchAccountScreen";
import SearchScreen from "../../containers/SearchScreen";
import SettingsScreen from "../../containers/SettingsScreen";
import TabsScreen from "../../containers/TabsScreen";
import UserDetailScreen from "../../containers/UserDetailScreen";
import VerifyOtpScreen from "../../containers/VerifyOtpScreen";
import NoNetwork from "../NoNetwork";

const getAppNavigator = auth => {
  const initialRouteName = getInitialScreen(auth);

  return createStackNavigator(
    {
      TabsScreen: { screen: TabsScreen },
      LoginScreen: { screen: LoginScreen },
      RegisterScreen: { screen: RegisterScreen },
      ManageProfileScreen: { screen: ManageProfileScreen },
      ManageCasteScreen: { screen: ManageCasteScreen },
      ManageFamilyScreen: { screen: ManageFamilyScreen },
      UserDetailScreen: { screen: UserDetailScreen },
      AvatarScreen: { screen: AvatarScreen },
      SearchScreen: { screen: SearchScreen },
      SettingsScreen: { screen: SettingsScreen },
      AddRelationScreen: { screen: AddRelationScreen },
      ResetPasswordScreen: { screen: ResetPasswordScreen },
      RequestOtpScreen: { screen: RequestOtpScreen },
      VerifyOtpScreen: { screen: VerifyOtpScreen },
      AccountListScreen: { screen: AccountListScreen },
      SearchAccountScreen: { screen: SearchAccountScreen },
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

    return "TabsScreen";
  }

  return "LoginScreen";
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
        {noConnection && <NoNetwork />}
        {hasConnection && authInitialized && <AppContainer />}
      </View>
    );
  }
}
