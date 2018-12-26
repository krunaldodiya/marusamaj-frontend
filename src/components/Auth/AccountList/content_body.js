import axios from "axios";
import { Button, Text, View } from "native-base";
import React from "react";
import { TextInput } from "react-native";
import { api } from "../../../libs/api";
import theme from "../../../libs/theme";

class ContentBody extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      loaded: false,
      mobile: "",
      data: []
    };
  }

  ForgotPassword = () => {
    const { mobile, data } = this.state;
    this.setState({ loading: true });

    axios
      .post(api.getUsersByMobile, { mobile }, {})
      .then(({ data }) => {
        this.setState({ data: data.users, loading: false, loaded: true });
      })
      .catch(() => {
        this.setState({ loading: false, loaded: true });
      });
  };

  render() {
    const { mobile, loading, loaded, data } = this.state;

    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            borderBottomWidth: 0.5,
            borderBottomColor: mobile.length !== 10 ? "#ccc" : "#d9534f"
          }}
        >
          <View style={{ marginLeft: 5 }}>
            <TextInput
              placeholder="Mobile Number"
              placeholderTextColor="gray"
              autoCorrect={false}
              keyboardType="number-pad"
              maxLength={10}
              onChangeText={number => this.setState({ mobile: number })}
              style={{ width: 200, fontSize: 16 }}
            />
          </View>

          <View style={{ marginRight: 5, justifyContent: "center" }}>
            <Button
              rounded
              small
              bordered
              danger
              disabled={mobile.length !== 10}
              onPress={() => this.ForgotPassword()}
            >
              <Text style={{ fontSize: 12 }}>SEARCH</Text>
            </Button>
          </View>
        </View>

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
            <View style={{ padding: 5, marginBottom: 5 }}>
              {data.map(test => (
                <View>
                  <View style={{ margin: 3 }}>
                    <Text
                      style={{
                        color: "black",
                        fontFamily: theme.fonts.TitilliumWebSemiBold,
                        fontSize: 14
                      }}
                    >
                      {test.name}
                    </Text>
                    <Text
                      style={{
                        color: "#333",
                        fontFamily: theme.fonts.TitilliumWebRegular,
                        fontSize: 12,
                        marginTop: 2
                      }}
                    >
                      {test.username}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          )}
        </View>
      </View>
    );
  }
}

export default ContentBody;
