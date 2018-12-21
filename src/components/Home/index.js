import React from "react";
import SideDrawer from "../shared/SideDrawer";
import UserList from "./user_list";
import { View, Text } from "native-base";
import theme from "../../libs/theme";

class Home extends React.Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    return (
      <SideDrawer {...this.props}>
        <View
          style={{
            paddingTop: 10,
            paddingBottom: 15,
            paddingHorizontal: 15,
            backgroundColor: "red"
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontFamily: theme.fonts.TitilliumWebSemiBold,
              color: 'white'
            }}
          >
            User List
          </Text>
        </View>

        <UserList {...this.props} />
      </SideDrawer>
    );
  }
}

export default Home;
