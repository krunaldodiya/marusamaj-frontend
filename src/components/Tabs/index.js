import { Tab, Tabs, Text } from "native-base";
import React from "react";
import SideDrawer from "../../components/shared/SideDrawer";
import TopBar from "../../components/shared/TopBar";
import theme from "../../libs/theme";
import FamilyTab from "./FamilyTab";
import UserTab from "./UserTab";

class HomeTabs extends React.Component {
  render() {
    return (
      <SideDrawer {...this.props}>
        <TopBar {...this.props} />

        <Tabs
          tabBarUnderlineStyle={{
            height: 2
          }}
          tabBarPosition="top"
        >
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
            heading="Family"
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
            <FamilyTab {...this.props} />
          </Tab>
        </Tabs>
      </SideDrawer>
    );
  }
}

export default HomeTabs;
