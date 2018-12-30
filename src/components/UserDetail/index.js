import { Container, Spinner, Text } from "native-base";
import React from "react";
import ContentHeader from "./content_header";
import styles from "./styles";
import UserFamily from "./user_family";
import UserProfile from "./user_profile";

class UserDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      segment: "profile",
      guestUser: null,
      loading: true
    };
  }

  componentDidMount() {
    const { navigation } = this.props;
    const { guestUser } = navigation.state.params;

    this.setState({ guestUser, loading: false });
  }

  toggleSegment = segment => {
    this.setState({ segment });
  };

  render() {
    const { segment, guestUser, loading } = this.state;

    return (
      <Container style={styles.container}>
        {loading && <Spinner size="small" />}

        {!loading && (
          <React.Fragment>
            <ContentHeader
              {...this.props}
              guestUser={guestUser}
              segment={segment}
              toggleSegment={this.toggleSegment}
            />
            {segment === "profile" && (
              <UserProfile {...this.props} guestUser={guestUser} />
            )}
            {segment === "family" && (
              <UserFamily {...this.props} guestUser={guestUser} />
            )}
          </React.Fragment>
        )}
      </Container>
    );
  }
}

export default UserDetail;
