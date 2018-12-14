import React from "react";
import { NetInfo, StatusBar, View } from "react-native";
import { createAppContainer, createStackNavigator } from "react-navigation";
import NoNetwork from "../../components/NoNetwork";
import AddMoneyScreen from "../../containers/AddMoneyScreen";
import GetStartedScreen from "../../containers/GetStartedScreen";
import ManageProfileScreen from "../../containers/ManageProfileScreen";
import QuestionsScreen from "../../containers/QuestionsScreen";
import QuizDetailScreen from "../../containers/QuizDetailScreen";
import RequestOtpScreen from "../../containers/RequestOtpScreen";
import TabsScreen from "../../containers/TabsScreen";
import TutorialsScreen from "../../containers/TutorialsScreen";
import VerifyOtpScreen from "../../containers/VerifyOtpScreen";

const getAppNavigator = auth => {
  const initialRouteName = getInitialScreen(auth);

  return createStackNavigator(
    {
      GetStartedScreen: { screen: GetStartedScreen },
      TabsScreen: { screen: TabsScreen },
      RequestOtpScreen: { screen: RequestOtpScreen },
      VerifyOtpScreen: { screen: VerifyOtpScreen },
      ManageProfileScreen: { screen: ManageProfileScreen },
      QuizDetailScreen: { screen: QuizDetailScreen },
      AddMoneyScreen: { screen: AddMoneyScreen },
      TutorialsScreen: { screen: TutorialsScreen },
      QuestionsScreen: { screen: QuestionsScreen },
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
    return authUser.profile_updated ? "TabsScreen" : "ManageProfileScreen";
  }

  return "GetStartedScreen";
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
