import React from "react";
import { NetInfo, View } from "react-native";
import { createAppContainer, createStackNavigator } from "react-navigation";
import AccountListScreen from "../../containers/AccountListScreen";
import AddRelationScreen from "../../containers/AddRelationScreen";
import AvatarScreen from "../../containers/AvatarScreen";
import ForgotPasswordScreen from "../../containers/ForgotPasswordScreen";
import LoginScreen from "../../containers/LoginScreen";
import ManageCasteScreen from "../../containers/ManageCasteScreen";
import ManageFamilyScreen from "../../containers/ManageFamilyScreen";
import ManageProfileScreen from "../../containers/ManageProfileScreen";
import RegisterScreen from "../../containers/RegisterScreen";
import RequestOtpScreen from "../../containers/RequestOtpScreen";
import ResetPasswordScreen from "../../containers/ResetPasswordScreen";
import SearchScreen from "../../containers/SearchScreen";
import SettingsScreen from "../../containers/SettingsScreen";
import TabsScreen from "../../containers/TabsScreen";
import UserDetailScreen from "../../containers/UserDetailScreen";
import VerifyOtpScreen from "../../containers/VerifyOtpScreen";
import { getInitialScreen } from "../../libs/screen";
import { getAuthMobile } from "../../services";
import NoNetwork from "../NoNetwork";

const getAppNavigator = initialRouteName => {
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
      ForgotPasswordScreen: { screen: ForgotPasswordScreen }
    },
    {
      initialRouteName,
      defaultNavigationOptions: {
        header: null
      }
    }
  );
};

export default class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shouldUpdate: true,
      authMobile: null
    };
  }

  componentDidMount() {
    NetInfo.addEventListener("connectionChange", netInfo => {
      this.setState({ shouldUpdate: true }, () => {
        this.props.handleNetworkChange(netInfo);
      });
    });
  }

  async componentWillReceiveProps(props) {
    const authMobile = await getAuthMobile();

    if (props.init.initialized) {
      this.setState({ shouldUpdate: false, authMobile });
    }
  }

  shouldComponentUpdate() {
    return this.state.shouldUpdate;
  }

  render() {
    const { network, auth, init } = this.props;
    const { authMobile } = this.state;

    const { connection } = network;
    const { authUser } = auth;
    const { initialized } = init;

    const initialRouteName = getInitialScreen(authUser, authMobile);
    const AppNavigator = getAppNavigator(initialRouteName);
    const AppContainer = createAppContainer(AppNavigator);

    const noConnection = connection && connection.type === "none";
    const hasConnection = connection && connection.type !== "none";

    return (
      <View style={{ flex: 1 }}>
        {noConnection && <NoNetwork />}
        {hasConnection && initialized && <AppContainer />}
      </View>
    );
  }
}
