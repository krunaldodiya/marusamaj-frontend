import React from "react";
import SideDrawer from "../shared/SideDrawer";
import UserList from "./user_list";
import { View, Text } from "native-base";

class Home extends React.Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    return (
      <SideDrawer {...this.props}>
        <View style={{ flex: 1, padding: 20 }}>
          <Text>My Quiz</Text>
          <UserList {...this.props} />
        </View>
      </SideDrawer>
    );
  }
}

export default Home;
