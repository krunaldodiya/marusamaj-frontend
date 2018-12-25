import {
  Body,
  Header,
  Left,
  Text,
  Icon,
  Right,
  Segment,
  Button
} from "native-base";
import React from "react";
import styles from "./styles";
import theme from "../../libs/theme";

const ContentHeader = props => {
  const { auth, guest, navigation, segment, toggleSegment } = props;
  const { authUser } = auth;
  const { guestUser } = guest;

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
            name="person-add"
            style={styles.termsIcon}
            onPress={() =>
              navigation.push("AddRelationScreen", { relative: user })
            }
          />
        )}
      </Right>
    </Header>
  );
};

export default ContentHeader;
