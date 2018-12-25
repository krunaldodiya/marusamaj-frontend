import { Body, Left, List, ListItem, Text, Thumbnail, View } from "native-base";
import React from "react";
import { FlatList } from "react-native";
import theme from "../../../libs/theme";

class FamilyTab extends React.Component {
  renderItem = (data, navigation) => {
    const { item } = data;

    return (
      <List>
        <ListItem
          avatar
          onPress={() =>
            navigation.push("UserDetailScreen", { user_id: item.user.id })
          }
        >
          <Left>
            <Thumbnail
              source={{ uri: item.user.avatar }}
              style={{ width: 65, height: 65 }}
            />
          </Left>
          <Body>
            <Text
              numberOfLines={1}
              style={{
                fontSize: 16,
                color: "#000",
                fontFamily: theme.fonts.TitilliumWebSemiBold
              }}
            >
              {item.user.name}
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
              {item.to_relation}
            </Text>
            <Text
              note
              style={{
                marginTop: 5,
                fontSize: 12,
                color: "green",
                fontFamily: theme.fonts.TitilliumWebSemiBold
              }}
            >
              {item.status == 1
                ? "Accepted"
                : item.status == 0 && item.user_id == item.to
                ? "Requested"
                : "Manage"}
            </Text>
          </Body>
        </ListItem>
      </List>
    );
  };

  render() {
    const { auth, navigation } = this.props;
    const { authUser } = auth;
    const { relatives } = authUser;
    
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={relatives}
          keyExtractor={(_, index) => index.toString()}
          renderItem={data => this.renderItem(data, navigation)}
        />
      </View>
    );
  }
}

export default FamilyTab;
