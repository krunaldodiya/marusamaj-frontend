import {
  Body,
  Content,
  Left,
  List,
  ListItem,
  Separator,
  Text,
  Thumbnail,
  View
} from "native-base";
import React from "react";
import theme from "../../libs/theme";
import styles from "./styles";

const ContentBody = props => {
  const { navigation } = props;
  const { user } = navigation.state.params;

  return (
    <Content style={styles.termsBody}>
      <List style={{ backgroundColor: "#fff" }}>
        <ListItem
          avatar
          onPress={() => navigation.push("AvatarScreen", { user })}
        >
          <Left>
            <Thumbnail
              source={{ uri: user.avatar }}
              style={{ width: 65, height: 65 }}
            />
          </Left>
          <Body style={{ borderBottomWidth: 0 }}>
            <Text
              style={{
                fontSize: 16,
                color: "#000",
                fontFamily: theme.fonts.TitilliumWebSemiBold
              }}
            >
              {user.name}
            </Text>
            <Text
              note
              style={{
                marginTop: 1,
                fontSize: 12,
                color: "#333",
                fontFamily: theme.fonts.TitilliumWebRegular
              }}
            >
              {user.age} {user.gender}, {user.marital_status}
            </Text>
            <Text
              note
              style={{
                marginTop: 10,
                fontSize: 12,
                color: "indigo",
                fontFamily: theme.fonts.TitilliumWebRegular
              }}
            >
              {user.sub_caste.name}, {user.caste.name}
            </Text>
          </Body>
        </ListItem>
      </List>

      <List>
        <Separator>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View>
              <Text
                style={{
                  fontFamily: theme.fonts.TitilliumWebRegular,
                  fontSize: 14,
                  color: "gray"
                }}
              >
                Mobile
              </Text>
            </View>
          </View>
        </Separator>

        <ListItem style={{ borderBottomWidth: 0 }}>
          <Text
            style={{
              fontFamily: theme.fonts.TitilliumWebRegular,
              fontSize: 14,
              letterSpacing: 1
            }}
          >
            {user.gender === "Female" ? "Private" : user.mobile}
          </Text>
        </ListItem>
      </List>

      <List>
        <Separator>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View>
              <Text
                style={{
                  fontFamily: theme.fonts.TitilliumWebRegular,
                  fontSize: 14,
                  color: "gray"
                }}
              >
                Birthdate
              </Text>
            </View>
          </View>
        </Separator>

        <ListItem style={{ borderBottomWidth: 0 }}>
          <Text
            style={{
              fontFamily: theme.fonts.TitilliumWebRegular,
              fontSize: 14,
              letterSpacing: 1
            }}
          >
            {user.gender === "Female" ? "Private" : user.dob}
          </Text>
        </ListItem>
      </List>

      <List>
        <Separator>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View>
              <Text
                style={{
                  fontFamily: theme.fonts.TitilliumWebRegular,
                  fontSize: 14,
                  color: "gray"
                }}
              >
                Education
              </Text>
            </View>
          </View>
        </Separator>

        <ListItem style={{ borderBottomWidth: 0 }}>
          <Text
            style={{
              fontFamily: theme.fonts.TitilliumWebRegular,
              fontSize: 14
            }}
          >
            {user.education}
          </Text>
        </ListItem>
      </List>

      <List>
        <Separator>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View>
              <Text
                style={{
                  fontFamily: theme.fonts.TitilliumWebRegular,
                  fontSize: 14,
                  color: "gray"
                }}
              >
                Occupation
              </Text>
            </View>
          </View>
        </Separator>

        <ListItem style={{ borderBottomWidth: 0 }}>
          <Text
            style={{
              fontFamily: theme.fonts.TitilliumWebRegular,
              fontSize: 14
            }}
          >
            {user.occupation}
          </Text>
        </ListItem>
      </List>

      <List>
        <Separator>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View>
              <Text
                style={{
                  fontFamily: theme.fonts.TitilliumWebRegular,
                  fontSize: 14,
                  color: "gray"
                }}
              >
                ગામ
              </Text>
            </View>
          </View>
        </Separator>

        <ListItem style={{ borderBottomWidth: 0 }}>
          <Text
            style={{
              fontFamily: theme.fonts.TitilliumWebRegular,
              fontSize: 14
            }}
          >
            {user.father_city}
          </Text>
        </ListItem>
      </List>

      <List>
        <Separator>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View>
              <Text
                style={{
                  fontFamily: theme.fonts.TitilliumWebRegular,
                  fontSize: 14,
                  color: "gray"
                }}
              >
                મોસાડ
              </Text>
            </View>
          </View>
        </Separator>

        <ListItem style={{ borderBottomWidth: 0 }}>
          <Text
            style={{
              fontFamily: theme.fonts.TitilliumWebRegular,
              fontSize: 14
            }}
          >
            {user.mother_city}
          </Text>
        </ListItem>
      </List>
    </Content>
  );
};

export default ContentBody;
