import { Container, Spinner } from "native-base";
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

  componentDidMount() {
    const { getGuestUser, navigation } = this.props;
    const { user_id } = navigation.state.params;
    
    getGuestUser({ user_id });
  }

  componentWillUnmount() {
    this.props.resetGuestUser();
  }

  toggleSegment = segment => {
    this.setState({ segment });
  };

  render() {
    const { segment } = this.state;
    const { guest } = this.props;
    const { loading, guestUser } = guest;

    return (
      <Container style={styles.container}>
        {loading && <Spinner size="small" />}

        {!loading && guestUser && (
          <React.Fragment>
            <ContentHeader
              {...this.props}
              segment={segment}
              toggleSegment={this.toggleSegment}
            />
            {segment === "profile" && <UserProfile {...this.props} />}
            {segment === "family" && <UserFamily {...this.props} />}
          </React.Fragment>
        )}
      </Container>
    );
  }
}

export default UserDetail;
