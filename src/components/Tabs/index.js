import { Tab, Tabs, Text } from "native-base";
import React from "react";
import SideDrawer from "../../components/shared/SideDrawer";
import TopBar from "../../components/shared/TopBar";
import UserTab from "./UserTab";
import theme from "../../libs/theme";

class HomeTabs extends React.Component {
  render() {
    return (
      <SideDrawer {...this.props}>
        <TopBar {...this.props} />

        <Tabs tabBarUnderlineStyle={{ height: 2 }}>
          <Tab
            heading="Users"
            textStyle={{
              color: "#dedede",
              fontFamily: theme.fonts.TitilliumWebRegular
            }}
            activeTextStyle={{
              color: "white",
              fontFamily: theme.fonts.TitilliumWebSemiBold
            }}
            tabStyle={{ backgroundColor: "#d80402" }}
            activeTabStyle={{ backgroundColor: "#d80402" }}
          >
            <UserTab {...this.props} />
          </Tab>

          <Tab
            heading="Events"
            textStyle={{
              color: "#dedede",
              fontFamily: theme.fonts.TitilliumWebRegular
            }}
            activeTextStyle={{
              color: "white",
              fontFamily: theme.fonts.TitilliumWebSemiBold
            }}
            tabStyle={{ backgroundColor: "#d80402" }}
            activeTabStyle={{ backgroundColor: "#d80402" }}
          >
            <Text>hello</Text>
          </Tab>

          <Tab
            heading="Alerts"
            textStyle={{
              color: "#dedede",
              fontFamily: theme.fonts.TitilliumWebRegular
            }}
            activeTextStyle={{
              color: "white",
              fontFamily: theme.fonts.TitilliumWebSemiBold
            }}
            tabStyle={{ backgroundColor: "#d80402" }}
            activeTabStyle={{ backgroundColor: "#d80402" }}
          >
            <Text>hello</Text>
          </Tab>
        </Tabs>
      </SideDrawer>
    );
  }
}

export default HomeTabs;
