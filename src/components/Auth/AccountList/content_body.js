import axios from "axios";
import { Button, Text, View } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";
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
    const { login, register, navigation, switchAccount } = this.props;
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
            <View style={{ padding: 10, marginBottom: 5 }}>
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
                    <TouchableOpacity
                      key={user.id}
                      onPress={() => {
                        return type === "switch"
                          ? switchAccount({ user_id: user.id, navigation })
                          : login({ user_id: user.id, navigation });
                      }}
                    >
                      <View style={{ marginBottom: 5 }}>
                        <Text
                          style={{
                            color: "black",
                            fontFamily: theme.fonts.TitilliumWebSemiBold,
                            fontSize: 14
                          }}
                        >
                          {user.name}
                        </Text>
                        <Text
                          style={{
                            color: "#333",
                            fontFamily: theme.fonts.TitilliumWebRegular,
                            fontSize: 12,
                            marginTop: 2
                          }}
                        >
                          {user.username}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>
          )}
        </View>

        <View style={{ margin: 20, alignSelf: "center" }}>
          <Button small danger onPress={() => register({ mobile, navigation })}>
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
