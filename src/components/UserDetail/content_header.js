import {
  Body,
  Button,
  Header,
  Icon,
  Left,
  Right,
  Segment,
  Text
} from "native-base";
import React from "react";
import theme from "../../libs/theme";
import styles from "./styles";

getRelationStatus = (authUser, guestUser) => {
  const { relatives } = authUser;

  if (!relatives.length) {
    return "person-add";
  }

  if (relatives.length) {
    const relation = relatives.filter(data => guestUser.id === data.from)[0];
    return relation && relation.status ? "verified-user" : "access-alarms";
  }
};

const ContentHeader = props => {
  const { auth, guest, navigation, segment, toggleSegment } = props;
  const { authUser } = auth;
  const { guestUser } = guest;

  const status = getRelationStatus(authUser, guestUser);

  return (
    <Header
      style={styles.termsWrapper}
      androidStatusBarColor="#d80402"
      hasSegment
    >
      <Left>
        <Icon
          type="MaterialIcons"
          name="arrow-back"
          style={styles.termsIcon}
          onPress={() => props.navigation.goBack()}
        />
      </Left>

      <Body>
        <Segment style={styles.termsHeader}>
          <Button
            first
            active={segment === "profile"}
            onPress={() => toggleSegment("profile")}
          >
            <Text
              style={{
                fontFamily:
                  segment === "profile"
                    ? theme.fonts.TitilliumWebSemiBold
                    : theme.fonts.TitilliumWebRegular
              }}
            >
              Profile
            </Text>
          </Button>
          <Button
            last
            active={segment === "family"}
            onPress={() => toggleSegment("family")}
          >
            <Text
              style={{
                fontFamily:
                  segment === "family"
                    ? theme.fonts.TitilliumWebSemiBold
                    : theme.fonts.TitilliumWebRegular
              }}
            >
              Family
            </Text>
          </Button>
        </Segment>
      </Body>

      <Right>
        {authUser.id === guestUser.id && (
          <Icon
            type="MaterialIcons"
            name="edit"
            style={styles.termsIcon}
            onPress={() => navigation.replace("ManageProfileScreen")}
          />
        )}

        {authUser.id !== guestUser.id && (
          <Icon
            type="MaterialIcons"
            name={status}
            style={styles.termsIcon}
            onPress={() => navigation.push("AddRelationScreen")}
          />
        )}
      </Right>
    </Header>
  );
};

export default ContentHeader;
