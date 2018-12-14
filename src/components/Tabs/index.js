import { Icon } from "native-base";
import React from "react";
import { createBottomTabNavigator } from "react-navigation";

const AppTabNavigator = createBottomTabNavigator(
  {
    Users: {
      screen: UsersScreen,
      navigationOptions: {
        title: "Screen 3",
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            type="Entypo"
            name="home"
            size={24}
            style={{ color: tintColor }}
          />
        )
      }
    },
    Events: {
      screen: EventsScreen,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            type="Entypo"
            size={24}
            name="book"
            style={{ color: tintColor }}
          />
        )
      }
    }
  },
  {
    tabBarOptions: {
      showLabel: false,
      activeTintColor: "#F8F8F8",
      inactiveTintColor: "#586589",
      style: {
        backgroundColor: "#171F33"
      }
    }
  }
);

export default AppTabNavigator;
