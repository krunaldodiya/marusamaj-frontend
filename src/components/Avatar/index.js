import { Container } from "native-base";
import React from "react";
import Loader from "../shared/Loader";
import ContentBody from "./content_body";
import ContentHeader from "./content_header";

class Avatar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false
    };
  }

  uploading = loading => {
    this.setState(loading);
  };

  render() {
    const { loading } = this.state;

    return (
      <Container style={{ flex: 1 }}>
        <Loader loading={loading} />
        <ContentHeader {...this.props} uploading={this.uploading} />
        <ContentBody {...this.props} />
      </Container>
    );
  }
}

export default Avatar;
