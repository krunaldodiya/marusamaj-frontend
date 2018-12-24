import { Container } from "native-base";
import React from "react";
import ContentHeader from "./content_header";
import styles from "./styles";
import UserFamily from "./user_family";
import UserProfile from "./user_profile";

class UserDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      segment: "profile"
    };
  }

  toggleSegment = segment => {
    this.setState({ segment });
  };

  render() {
    const { segment } = this.state;

    return (
      <Container style={styles.container}>
        <ContentHeader
          {...this.props}
          segment={segment}
          toggleSegment={this.toggleSegment}
        />
        {segment === "profile" && <UserProfile {...this.props} />}
        {segment === "family" && <UserFamily {...this.props} />}
      </Container>
    );
  }
}

export default UserDetail;
