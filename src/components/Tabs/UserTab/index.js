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
  constructor(props) {
    super(props);

    this.state = {
      refreshing: false
    };
  }

  componentDidMount() {
    this.props.getUsers({ page: 1 });
  }

  componentWillUnmount() {
    this.props.resetUsers();
  }

  onPullToRefresh = loading => {
    this.setState({ refreshing: true });

    this.props.resetUsers();
    this.props.getUsers({ page: 1 });

    if (!loading) {
      this.setState({ refreshing: false });
    }
  };

  renderItem = (data, navigation) => {
    const { item } = data;

    return (
      <List>
        <ListItem
          avatar
          onPress={() =>
            navigation.push("UserDetailScreen", { guestUser: item })
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

  loadingData = () => {
    return (
      <View style={{ padding: 10 }}>
        <Spinner color="#000" size="small" />
      </View>
    );
  };

  render() {
    const { refreshing } = this.state;
    const { users, navigation, getUsers } = this.props;
    const { data, loading, page, last_page } = users;

    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={data}
          onEndReachedThreshold={5}
          onEndReached={() => {
            if (users.last_page > users.page) {
              getUsers({ page: users.page + 1 });
            }
          }}
          ListFooterComponent={() => {
            return (
              <View style={{ justifyContent: "center" }}>
                {loading && this.loadingData()}

                {!loading && page >= last_page && (
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
          refreshing={refreshing}
          onRefresh={() => this.onPullToRefresh(loading)}
        />
      </View>
    );
  }
}

export default UserTab;
