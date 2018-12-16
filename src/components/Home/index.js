import React from "react";
import UserList from "./user_list";

class Home extends React.Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    return <UserList {...this.props} />;
  }
}

export default Home;
