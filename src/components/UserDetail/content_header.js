import { Body, Header, Left, Text, Icon } from "native-base";
import React from "react";
import styles from "./styles";

const ContentHeader = props => {
  const { quiz } = props.navigation.state.params;

  return (
    <Header style={styles.termsWrapper} androidStatusBarColor="#d80402">
      <Left>
        <Icon
          type="MaterialIcons"
          name="arrow-back"
          style={styles.termsIcon}
          onPress={() => props.navigation.goBack()}
        />
      </Left>

      <Body>
        <Text style={styles.termsHeader}>{quiz.category.name}</Text>
      </Body>
    </Header>
  );
};

export default ContentHeader;
