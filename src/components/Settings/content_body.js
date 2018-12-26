import { Button, Switch, Text, View } from "native-base";
import React from "react";
import { KeyboardAvoidingView, SafeAreaView, TextInput } from "react-native";
import theme from "../../libs/theme";

class ContentBody extends React.Component {
  constructor(props) {
    super(props);

    const { auth } = props;
    const { authUser } = auth;

    this.state = {
      show_mobile: authUser.setting.show_mobile,
      show_birthday: authUser.setting.show_birthday,
      uid: authUser.uid,
      secondary_mobile: authUser.secondary_mobile,
      mobile: authUser.mobile
    };
  }

  render() {
    const {
      show_mobile,
      show_birthday,
      uid,
      secondary_mobile,
      mobile
    } = this.state;

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          behavior="position"
          enabled
          style={{ flex: 1 }}
          contentContainerStyle={{ flex: 1 }}
        >
          <View
            style={{
              padding: 10,
              marginBottom: 10,
              borderBottomWidth: 1,
              borderBottomColor: "#d80402"
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 10,
                marginBottom: 10
              }}
            >
              <Text
                style={{
                  fontFamily: theme.fonts.TitilliumWebRegular,
                  fontSize: 14,
                  color: "#d80402"
                }}
              >
                SHOW MOBILE
              </Text>
              <Switch
                value={show_mobile}
                onValueChange={value => {
                  this.setState({ show_mobile: value }, () => {
                    console.log("test");
                  });
                }}
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 10,
                marginBottom: 10
              }}
            >
              <Text
                style={{
                  fontFamily: theme.fonts.TitilliumWebRegular,
                  fontSize: 14,
                  color: "#d80402"
                }}
              >
                SHOW BIRTHDAY
              </Text>
              <Switch
                value={show_birthday}
                onValueChange={value => {
                  this.setState({ show_birthday: value }, () => {
                    console.log("test");
                  });
                }}
              />
            </View>
          </View>

          <View
            style={{
              padding: 10,
              marginBottom: 10,
              borderBottomWidth: 1,
              borderBottomColor: "#d80402"
            }}
          >
            <Text
              style={{
                fontFamily: theme.fonts.TitilliumWebRegular,
                fontSize: 14,
                color: "#d80402"
              }}
            >
              AADHAAR CARD
            </Text>

            <TextInput
              placeholder="Update Aadhaar Card"
              placeholderTextColor="#000"
              keyboardType="number-pad"
              maxLength={10}
              value={uid}
              onChangeText={number => this.setState({ uid: number })}
              style={{
                color: "black",
                borderWidth: 1,
                borderColor: "gray",
                marginTop: 10,
                borderRadius: 30,
                paddingVertical: 5,
                paddingLeft: 15,
                fontFamily: theme.fonts.TitilliumWebRegular
              }}
            />

            <View style={{ marginTop: 20, marginBottom: 10 }}>
              <Button
                small
                danger
                rounded
                onPress={() => {
                  console.log("test");
                }}
              >
                <Text
                  style={{
                    fontFamily: theme.fonts.TitilliumWebRegular,
                    fontSize: 14,
                    color: "white"
                  }}
                >
                  UPDATE
                </Text>
              </Button>
            </View>
          </View>

          <View
            style={{
              padding: 10,
              marginBottom: 10,
              borderBottomWidth: 1,
              borderBottomColor: "#d80402"
            }}
          >
            <Text
              style={{
                fontFamily: theme.fonts.TitilliumWebRegular,
                fontSize: 14,
                color: "#d80402"
              }}
            >
              SECONDARY MOBILE
            </Text>

            <TextInput
              placeholder="Update Secondary Mobile"
              placeholderTextColor="#000"
              keyboardType="number-pad"
              maxLength={10}
              value={secondary_mobile}
              onChangeText={number =>
                this.setState({ secondary_mobile: number })
              }
              style={{
                color: "black",
                borderWidth: 1,
                borderColor: "gray",
                marginTop: 10,
                borderRadius: 30,
                paddingVertical: 5,
                paddingLeft: 15,
                fontFamily: theme.fonts.TitilliumWebRegular
              }}
            />

            <View style={{ marginTop: 20, marginBottom: 10 }}>
              <Button
                small
                danger
                rounded
                onPress={() => {
                  console.log("test");
                }}
              >
                <Text
                  style={{
                    fontFamily: theme.fonts.TitilliumWebRegular,
                    fontSize: 14,
                    color: "white"
                  }}
                >
                  UPDATE
                </Text>
              </Button>
            </View>
          </View>

          <View
            style={{
              padding: 10
            }}
          >
            <Text
              style={{
                fontFamily: theme.fonts.TitilliumWebRegular,
                fontSize: 14,
                color: "#d80402"
              }}
            >
              PRIMARY MOBILE
            </Text>

            <View
              style={{
                marginTop: 20,
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <View style={{ justifyContent: "center" }}>
                <Text
                  style={{
                    fontFamily: theme.fonts.TitilliumWebRegular,
                    fontSize: 18,
                    color: "#000"
                  }}
                >
                  {mobile}
                </Text>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

export default ContentBody;
