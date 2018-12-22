import { Container, View, Text } from "native-base";
import React from "react";
import ContentBody from "./content_body";
import ContentHeader from "./content_header";
import styles from "./styles";

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
        {segment === "profile" && <ContentBody {...this.props} />}
        {segment === "family" && (
          <View style={{ padding: 10 }}>
            <Text>Family</Text>
          </View>
        )}
      </Container>
    );
  }
}

export default UserDetail;
