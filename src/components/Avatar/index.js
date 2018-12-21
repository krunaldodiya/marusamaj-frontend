import { Container } from "native-base";
import React from "react";
import ContentBody from "./content_body";
import ContentHeader from "./content_header";

class Avatar extends React.Component {
  constructor(props) {
    super(props);

    const { user } = this.props.navigation.state.params;

    this.state = {
      avatar: user.avatar
    };
  }

  changeAvatar = avatar => {
    this.setState({ avatar });
  };

  render() {
    const { avatar } = this.state;

    return (
      <Container style={{ flex: 1 }}>
        <ContentHeader {...this.props} changeAvatar={this.changeAvatar} />
        <ContentBody {...this.props} avatar={avatar} />
      </Container>
    );
  }
}

export default Avatar;
