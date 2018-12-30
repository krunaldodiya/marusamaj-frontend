import axios from "axios";
import {
  Body,
  Button,
  Left,
  List,
  ListItem,
  Text,
  Thumbnail,
  View
} from "native-base";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import Loader from "../../../components/shared/Loader";
import { api } from "../../../libs/api";
import theme from "../../../libs/theme";
import { getAuthMobile } from "../../../services";

class ContentBody extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      mobile: null,
      users: []
    };
  }

  async componentWillMount() {
    this.setState({ loading: true });

    const mobile = await getAuthMobile();

    axios
      .post(api.getUsersByMobile, { mobile })
      .then(({ data }) => {
        this.setState({ users: data.users, mobile, loading: false });
      })
      .catch(() => {
        this.setState({ users: [], mobile, loading: false });
      });
  }

  renderItem = data => {
    const user = data.item;
    const { login, navigation, auth } = this.props;
    const { authUser } = auth;
    const { params } = navigation.state;
    const type = params ? params.type : null;

    return (
      <List
        key={user.id}
        style={{
          backgroundColor:
            authUser && authUser.id === user.id ? "#eee" : "white"
        }}
      >
        <ListItem
          avatar
          onPress={() => {
            this.setState({ loading: true });

            return login({
              user_id: user.id,
              navigation,
              authenticated: type === "switch"
            });
          }}
        >
          <Left>
            <Thumbnail
              source={{ uri: user.avatar }}
              style={{ width: 40, height: 40 }}
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
          </Body>
        </ListItem>
      </List>
    );
  };

  render() {
    const { loading, mobile, users } = this.state;
    const { register, navigation } = this.props;
    const { params } = navigation.state;
    const type = params ? params.type : null;

    return (
      <View style={{ flex: 1 }}>
        <Loader loading={loading} />

        <React.Fragment>
          {!users.length && (
            <View style={{ padding: 20 }}>
              <Text
                style={{
                  color: "black",
                  fontFamily: theme.fonts.TitilliumWebSemiBold,
                  fontSize: 14
                }}
              >
                {loading ? "Loading, please wait..." : "No Accounts"}
              </Text>
            </View>
          )}

          <View style={{ flex: 1 }}>
            <FlatList data={users} renderItem={data => this.renderItem(data)} />
          </View>
        </React.Fragment>

        <View style={{ margin: 20, alignSelf: "center" }}>
          <Button
            small
            danger
            onPress={() => {
              this.setState({ loading: true });

              register({
                mobile,
                navigation,
                authenticated: type === "switch"
              });
            }}
          >
            <Text
              style={{
                color: "white",
                fontFamily: theme.fonts.TitilliumWebSemiBold,
                fontSize: 14
              }}
            >
              Add Account
            </Text>
          </Button>
        </View>
      </View>
    );
  }
}

export default ContentBody;
