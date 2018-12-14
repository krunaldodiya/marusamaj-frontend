import { Container, Text } from "native-base";
import React from "react";
import ContentBody from "./content_body";
import ContentHeader from "./content_header";
import styles from "./styles";

Questions = props => {
  return (
    <Container style={styles.container}>
      <ContentHeader {...props} />
      <ContentBody {...props} />
    </Container>
  );
};

export default Questions;
