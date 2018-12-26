import {
  Body,
  Left,
  List,
  ListItem,
  Spinner,
  Thumbnail,
  View
} from "native-base";
import React from "react";
import { FlatList, Text } from "react-native";
import theme from "../../../libs/theme";

class UserTab extends React.Component {
  componentWillMount() {
    this.props.resetUsers();
  }

  componentDidMount() {
    this.props.getUsers({ page: 1 });
  }

  renderItem = (data, navigation) => {
    const { item } = data;

    return (
      <List>
        <ListItem
          avatar
          onPress={() =>
            navigation.push("UserDetailScreen", { user_id: item.id })
          }
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
    const { data, loading, page, last_page } = users;

    return (
      <View style={{ flex: 1 }}>
        {loading && (
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Spinner color="#000" size="small" />
          </View>
        )}

        {!loading && (
          <FlatList
            data={data}
            onEndReached={() => {
              if (users.last_page > users.page) {
                getUsers({ page: users.page + 1 });
              }
            }}
            ListFooterComponent={() => {
              return (
                <View style={{ justifyContent: "center" }}>
                  {page < last_page ? (
                    <View style={{ padding: 10 }}>
                      <Spinner color="#000" size="small" />
                    </View>
                  ) : (
                    <View style={{ padding: 10 }}>
                      <Text
                        style={{
                          textAlign: "center",
                          fontFamily: theme.fonts.TitilliumWebRegular
                        }}
                      >
                        No more data.
                      </Text>
                    </View>
                  )}
                </View>
              );
            }}
            onEndReachedThreshold={0.5}
            keyExtractor={(_, index) => index.toString()}
            renderItem={data => this.renderItem(data, navigation)}
          />
        )}
      </View>
    );
  }
}

export default UserTab;
