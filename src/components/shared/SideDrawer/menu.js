import { Body, Left, List, ListItem, Text, Thumbnail, View } from "native-base";
import React from "react";
import { Linking, TouchableOpacity } from "react-native";
import theme from "../../../libs/theme";
import { httpUrl } from "../../../libs/vars";

const app_id = "com.marusamaj";

Menu = props => {
  const { navigation, auth, toggleDrawer, logout } = props;
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
                {authUser.mobile}
              </Text>

              <TouchableOpacity
                onPress={() => {
                  toggleDrawer({ isOpen: false });
                  navigation.push("UserDetailScreen", { user_id: authUser.id });
                }}
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
            onPress={() => {
              toggleDrawer({ isOpen: false });
              navigation.push("SettingsScreen");
            }}
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
              Help
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => Linking.openURL(`market://details?id=${app_id}`)}
            style={{ marginTop: 15, marginBottom: 0, marginLeft: 15 }}
          >
            <Text
              style={{
                color: "#333",
                fontFamily: theme.fonts.TitilliumWebRegular,
                fontSize: 14
              }}
            >
              Rate us
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                `whatsapp://send?text=https://play.google.com/store/apps/details?id=${app_id}&rdid=${app_id}`
              )
            }
            style={{ marginTop: 15, marginBottom: 0, marginLeft: 15 }}
          >
            <Text
              style={{
                color: "#333",
                fontFamily: theme.fonts.TitilliumWebRegular,
                fontSize: 14
              }}
            >
              Invite Friends
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => Linking.openURL(`${httpUrl}/terms`)}
            style={{ marginTop: 15, marginBottom: 15, marginLeft: 15 }}
          >
            <Text
              style={{
                color: "#333",
                fontFamily: theme.fonts.TitilliumWebRegular,
                fontSize: 14
              }}
            >
              Terms & Privacy Policy
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ backgroundColor: "lightblue", padding: 15 }}>
        <TouchableOpacity
          onPress={() => {
            toggleDrawer({ isOpen: false });
            navigation.replace("AccountListScreen", { type: "switch" });
          }}
        >
          <Text
            style={{
              fontFamily: theme.fonts.TitilliumWebRegular,
              fontSize: 16,
              color: "#d80402"
            }}
          >
            Switch Account
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Menu;
