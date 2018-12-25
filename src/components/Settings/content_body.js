import { Button, Input, Switch, Text, View } from "native-base";
import React from "react";
import theme from "../../libs/theme";

class ContentBody extends React.Component {
  render() {
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
            CHANGE MOBILE
          </Text>

          <Input
            placeholder="Change Mobile"
            style={{
              borderWidth: 1,
              marginTop: 10,
              padding: 15,
              borderRadius: 20,
              borderColor: "gray"
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
            CHANGE PASSWORD
          </Text>

          <Input
            placeholder="New Password"
            style={{
              borderWidth: 1,
              marginTop: 10,
              padding: 15,
              borderRadius: 20,
              borderColor: "gray"
            }}
          />

          <Input
            placeholder="New Password"
            style={{
              borderWidth: 1,
              marginTop: 10,
              padding: 15,
              borderRadius: 20,
              borderColor: "gray"
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
      </View>
    );
  }
}

export default ContentBody;
