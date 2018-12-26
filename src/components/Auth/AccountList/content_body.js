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
    const { login, register, navigation } = this.props;
    const { type } = navigation.state.params;

    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          {loading && (
            <View style={{ padding: 10 }}>
              <Text
                style={{
                  color: "black",
                  fontFamily: theme.fonts.TitilliumWebSemiBold,
                  fontSize: 14
                }}
              >
                Please, wait...
              </Text>
            </View>
          )}

          {!loading && (
            <View style={{ flex: 1 }}>
              {!data.length ? (
                <View>
                  <Text
                    style={{
                      color: "black",
                      fontFamily: theme.fonts.TitilliumWebSemiBold,
                      fontSize: 14
                    }}
                  >
                    No Accounts
                  </Text>
                </View>
              ) : (
                <View>
                  {data.map(user => (
                    <List>
                      <ListItem
                        avatar
                        onPress={() => {
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
          )}
        </View>

        <View style={{ margin: 20, alignSelf: "center" }}>
          <Button
            small
            danger
            onPress={() => {
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
