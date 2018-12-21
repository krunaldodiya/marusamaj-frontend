import { Body, Header, Left, Text, Icon, Right } from "native-base";
import React from "react";
import styles from "./styles";

const ContentHeader = props => {
  const { auth } = props;
  const { authUser } = auth;
  const { user } = props.navigation.state.params;

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
        <Text numberOfLines={1} style={styles.termsHeader}>
          User Detail
        </Text>
      </Body>

      <Right>
        {authUser.id === user.id && (
          <Icon
            type="MaterialIcons"
            name="edit"
            style={styles.termsIcon}
            onPress={() => console.log(user)}
          />
        )}
      </Right>
    </Header>
  );
};

export default ContentHeader;
