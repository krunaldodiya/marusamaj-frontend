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
      data: []
    };
  }

  componentDidMount = async () => {
    const mobile = await getAuthMobile();

    this.setState({ loading: true, mobile });

    axios
      .post(api.getUsersByMobile, { mobile }, {})
      .then(({ data }) => {
        this.setState({ data: data.users, loading: false });
      })
      .catch(() => {
        this.setState({ loading: false });
      });
  };

  render() {
    const { loading, mobile, data } = this.state;
    const { login, register, navigation, auth } = this.props;
    const { authUser } = auth;
    const { type } = navigation.state.params;

    return (
      <View style={{ flex: 1 }}>
        <Loader loading={loading} />

        <View style={{ flex: 1 }}>
          {!data.length ? (
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
          ) : (
            <View>
              {data.map(user => (
                <List
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
              ))}
            </View>
          )}
        </View>

        <View style={{ margin: 20, alignSelf: "center" }}>
          <Button
            small
            danger
            onPress={() => {
              this.setState({ loading: true });

              return register({
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
