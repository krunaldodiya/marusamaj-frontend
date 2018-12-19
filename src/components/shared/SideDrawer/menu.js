import { Body, Left, List, ListItem, Text, Thumbnail, View } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";
import theme from "../../../libs/theme";

logout = navigation => {
  navigation.replace("GetStartedScreen");
};

Menu = props => {
  const { navigation, auth } = props;
  const { authUser } = auth;

  return (
    <View style={{ flex: 1, backgroundColor: "#f3f3f3" }}>
      <View style={{ backgroundColor: "lightblue" }}>
        <List style={{ paddingBottom: 5 }}>
          <ListItem avatar>
            <Left>
              <Thumbnail
                large
                source={{
                  uri:
                    "https://cdn.iconscout.com/icon/free/png-256/avatar-369-456321.png"
                }}
              />
            </Left>

            <Body>
              <Text
                numberOfLines={1}
                style={{
                  marginTop: 5,
                  fontSize: 16,
                  color: "#000",
                  fontFamily: theme.fonts.TitilliumWebSemiBold
                }}
              >
                {authUser.name}
              </Text>
              <Text
                note
                style={{
                  marginTop: 3,
                  fontSize: 12,
                  color: "#333",
                  fontFamily: theme.fonts.TitilliumWebRegular
                }}
              >
                {authUser.mobile}
              </Text>
              <Text
                note
                style={{
                  marginTop: 12,
                  fontSize: 14,
                  color: "red",
                  fontFamily: theme.fonts.TitilliumWebRegular
                }}
              >
                VIEW PROFILE
              </Text>
            </Body>
          </ListItem>
        </List>
      </View>

      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <View>
            <View style={{ backgroundColor: "#ddd", padding: 15 }}>
              <Text
                style={{
                  fontFamily: theme.fonts.TitilliumWebRegular,
                  fontSize: 16,
                  color: "black"
                }}
              >
                Home
              </Text>
            </View>

            <TouchableOpacity
              onPress={() => this.logout(navigation)}
              style={{ marginTop: 15, marginBottom: 0, marginLeft: 15 }}
            >
              <Text
                style={{
                  color: "#333",
                  fontFamily: theme.fonts.TitilliumWebRegular,
                  fontSize: 14
                }}
              >
                Users
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.logout(navigation)}
              style={{ marginTop: 15, marginBottom: 0, marginLeft: 15 }}
            >
              <Text
                style={{
                  color: "#333",
                  fontFamily: theme.fonts.TitilliumWebRegular,
                  fontSize: 14
                }}
              >
                Settings
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.logout(navigation)}
              style={{ marginTop: 15, marginBottom: 15, marginLeft: 15 }}
            >
              <Text
                style={{
                  color: "#333",
                  fontFamily: theme.fonts.TitilliumWebRegular,
                  fontSize: 14
                }}
              >
                Share App
              </Text>
            </TouchableOpacity>
          </View>

          <View>
            <View style={{ backgroundColor: "#ddd", padding: 15 }}>
              <Text
                style={{
                  fontFamily: theme.fonts.TitilliumWebRegular,
                  fontSize: 16,
                  color: "black"
                }}
              >
                Events
              </Text>
            </View>

            <TouchableOpacity
              onPress={() => this.logout(navigation)}
              style={{ marginTop: 15, marginBottom: 0, marginLeft: 15 }}
            >
              <Text
                style={{
                  color: "#333",
                  fontFamily: theme.fonts.TitilliumWebRegular,
                  fontSize: 14
                }}
              >
                Event List
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.logout(navigation)}
              style={{ marginTop: 15, marginBottom: 15, marginLeft: 15 }}
            >
              <Text
                style={{
                  color: "#333",
                  fontFamily: theme.fonts.TitilliumWebRegular,
                  fontSize: 14
                }}
              >
                Add Event
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ backgroundColor: "#ddd", padding: 15 }}>
          <TouchableOpacity onPress={() => this.logout(navigation)}>
            <Text
              style={{
                fontFamily: theme.fonts.TitilliumWebRegular,
                fontSize: 16,
                color: "black"
              }}
            >
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Menu;
