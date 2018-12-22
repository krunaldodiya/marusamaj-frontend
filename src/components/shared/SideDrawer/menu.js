import { Body, Left, List, ListItem, Text, Thumbnail, View } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";
import theme from "../../../libs/theme";

Menu = props => {
  const { navigation, auth, logout } = props;
  const { authUser } = auth;

  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: "white" }}>
        <List style={{ paddingBottom: 5 }}>
          <ListItem avatar>
            <Left>
              <Thumbnail
                source={{ uri: authUser.avatar }}
                style={{ width: 70, height: 70 }}
              />
            </Left>

            <Body style={{ borderBottomWidth: 0 }}>
              <Text
                numberOfLines={1}
                style={{
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
                  fontSize: 12,
                  color: "#333",
                  fontFamily: theme.fonts.TitilliumWebRegular
                }}
              >
                {authUser.username}
              </Text>

              <TouchableOpacity
                onPress={() =>
                  navigation.push("UserDetailScreen", { user: authUser })
                }
              >
                <Text
                  note
                  style={{
                    marginTop: 10,
                    fontSize: 14,
                    color: "#d80402",
                    fontFamily: theme.fonts.TitilliumWebRegular
                  }}
                >
                  VIEW PROFILE
                </Text>
              </TouchableOpacity>
            </Body>
          </ListItem>
        </List>
      </View>

      <View style={{ flex: 1 }}>
        <View>
          <View style={{ backgroundColor: "lightblue", padding: 15 }}>
            <Text
              style={{
                fontFamily: theme.fonts.TitilliumWebRegular,
                fontSize: 16,
                color: "black"
              }}
            >
              Account
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => navigation.push("SettingsScreen")}
            style={{ marginTop: 15, marginBottom: 15, marginLeft: 15 }}
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
        </View>

        <View>
          <View style={{ backgroundColor: "lightblue", padding: 15 }}>
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
            onPress={() => console.log("test")}
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
            onPress={() => console.log("test")}
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

      <View style={{ backgroundColor: "lightblue", padding: 15 }}>
        <TouchableOpacity onPress={() => logout({ navigation })}>
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
  );
};

export default Menu;
