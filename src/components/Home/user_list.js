import { Body, Left, List, ListItem, Thumbnail } from "native-base";
import React from "react";
import { FlatList, Text } from "react-native";
import theme from "../../libs/theme";

getPrize = item => {
  return item.entry_fee * item.total_participants * 0.8;
};

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

UserList = props => {
  const { users, navigation, getUsers } = props;
  const { data } = users;

  return (
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
  );
};

export default UserList;
