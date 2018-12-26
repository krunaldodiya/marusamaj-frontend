import { Button, Switch, Text, View } from "native-base";
import React from "react";
import { TextInput } from "react-native";
import theme from "../../libs/theme";

class ContentBody extends React.Component {
  render() {
    const { auth } = this.props;
    const { authUser } = auth;

    return (
      <View style={{ justifyContent: "center" }}>
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
            <Switch />
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
            <Switch />
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
            UPDATE AADHAAR CARD
          </Text>

          <TextInput
            placeholder="Update Aadhaar Card"
            placeholderTextColor="#000"
            keyboardType="number-pad"
            maxLength={10}
            value={authUser.uid}
            onChangeText={number => console.log(number)}
            style={{
              color: 'black',
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
            <Button small danger rounded>
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
            CHANGE MOBILE
          </Text>

          <TextInput
            placeholder="Change Mobile"
            placeholderTextColor="#000"
            keyboardType="number-pad"
            maxLength={10}
            value={authUser.mobile}
            onChangeText={number => console.log(number)}
            style={{
              color: 'black',
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
            <Button small danger rounded>
              <Text
                style={{
                  fontFamily: theme.fonts.TitilliumWebRegular,
                  fontSize: 14,
                  color: "white"
                }}
              >
                CHANGE
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
            CURRENT ACCOUNT
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
                  fontFamily: theme.fonts.TitilliumWebSemiBold,
                  fontSize: 18,
                  color: "#000"
                }}
              >
                {authUser.name}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default ContentBody;
