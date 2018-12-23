import { Body, Left, List, ListItem, Thumbnail, View } from "native-base";
import React from "react";
import { FlatList, Text } from "react-native";
import theme from "../../../libs/theme";

class UserTab extends React.Component {
  componentDidMount() {
    this.props.getUsers({ page: 1 });
  }

  renderItem = (data, navigation) => {
    const { item } = data;

    return (
      <List>
        <ListItem
          avatar
          onPress={() => navigation.push("UserDetailScreen", { user: item })}
        >
          <Left>
            <Thumbnail
              source={{ uri: item.avatar }}
              style={{ width: 65, height: 65 }}
            />
          </Left>
          <Body>
            <Text
              style={{
                fontSize: 16,
                color: "#000",
                fontFamily: theme.fonts.TitilliumWebSemiBold
              }}
            >
              {item.name}
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
              {item.age} {item.gender}, {item.marital_status}
            </Text>
            <Text
              note
              style={{
                marginTop: 10,
                fontSize: 12,
                color: "green",
                fontFamily: theme.fonts.TitilliumWebSemiBold
              }}
            >
              {item.sub_caste.name}, {item.caste.name}
            </Text>
          </Body>
        </ListItem>
      </List>
    );
  };

  render() {
    const { users, navigation, getUsers } = this.props;
    const { data } = users;

    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={data}
          onEndReached={() => {
            if (users.last_page > users.page) {
              getUsers({ page: users.page + 1 });
            }
          }}
          onEndReachedThreshold={0.5}
          keyExtractor={(_, index) => index.toString()}
          renderItem={data => this.renderItem(data, navigation)}
        />
      </View>
    );
  }
}

export default UserTab;
