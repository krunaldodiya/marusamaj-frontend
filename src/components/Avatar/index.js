import { Container } from "native-base";
import React from "react";
import Loader from "../shared/Loader";
import ContentBody from "./content_body";
import ContentHeader from "./content_header";

class Avatar extends React.Component {
  constructor(props) {
    super(props);

    const { user } = this.props.navigation.state.params;

    this.state = {
      avatar: user.avatar,
      loading: false
    };
  }

  changeAvatar = data => {
    this.setState({ ...this.state, ...data });
  };

  render() {
    const { avatar, loading } = this.state;

    return (
      <Container style={{ flex: 1 }}>
        <Loader loading={loading} />
        <ContentHeader {...this.props} changeAvatar={this.changeAvatar} />
        <ContentBody {...this.props} avatar={avatar} />
      </Container>
    );
  }
}

export default Avatar;
