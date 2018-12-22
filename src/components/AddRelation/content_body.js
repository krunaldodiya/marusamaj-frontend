import { Text, View } from "native-base";
import React from "react";
import theme from "../../libs/theme";
import { TouchableOpacity } from "react-native";

const relations = {
  Male: {
    Married: ["Brother", "Son", "Father", "Husband"],
    Single: ["Brother", "Son"]
  },
  Female: {
    Married: ["Sister", "Daughter", "Mother", "Wife"],
    Single: ["Sister", "Daughter"]
  }
};

class ContentBody extends React.Component {
  render() {
    const { navigation, auth } = this.props;
    const { authUser } = auth;
    const { relative } = navigation.state.params;

    return (
      <View style={{ flex: 1, padding: 10 }}>
        <View style={{ margin: 10 }}>
          <Text
            style={{
              fontSize: 22,
              fontFamily: theme.fonts.TitilliumWebSemiBold
            }}
          >
            {relative.name}
          </Text>
        </View>

        <View style={{ flex: 1 }}>
          {relations[relative.gender][relative.marital_status].map(data => (
            <View style={{ marginHorizontal: 20, marginVertical: 10 }}>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: theme.fonts.TitilliumWebRegular
                }}
              >
                {data}
              </Text>
            </View>
          ))}
        </View>

        <TouchableOpacity
          onPress={() => console.log("test")}
          style={{
            alignSelf: "center",
            backgroundColor: "#d80402",
            padding: 10,
            borderRadius: 30,
            width: 200
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontFamily: theme.fonts.TitilliumWebSemiBold,
              color: "white",
              textAlign: "center"
            }}
          >
            Add to Family
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default ContentBody;
