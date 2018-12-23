import { Text, View } from "native-base";
import React from "react";
import theme from "../../libs/theme";
import { TouchableOpacity } from "react-native";

const user_relations = {
  Male: {
    Married: ["Brother", "Son", "Father", "Husband"],
    Single: ["Brother", "Son"]
  },
  Female: {
    Married: ["Sister", "Daughter", "Mother", "Wife"],
    Single: ["Sister", "Daughter"]
  }
};

const relative_relations = {
  Brother: { Male: "Brother", Female: "Sister" },
  Son: { Male: "Brother", Female: "Sister" },
  Father: { Male: "Brother", Female: "Sister" },
  Husband: { Male: "Brother", Female: "Sister" },
  Sister: { Male: "Brother", Female: "Sister" },
  Daughter: { Male: "Brother", Female: "Sister" },
  Mother: { Male: "Brother", Female: "Sister" },
  Wife: { Male: "Brother", Female: "Sister" }
};

class ContentBody extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user_relation: null,
      relative_relation: null,
      request_status: null
    };
  }

  render() {
    const { navigation, auth, addRelation } = this.props;
    const { user_relation, relative_relation } = this.state;
    const { authUser } = auth;
    const { relative } = navigation.state.params;

    const relationship =
      user_relations[relative.gender][relative.marital_status];

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
          {relationship.map((user_relation_data, index) => {
            const relative_relation_data =
              relative_relations[user_relation_data][authUser.gender];

            return (
              <View
                style={{ marginHorizontal: 20, marginVertical: 10 }}
                key={index}
              >
                <Text
                  onPress={() =>
                    this.setState({
                      user_relation: user_relation_data,
                      relative_relation: relative_relation_data
                    })
                  }
                  style={{
                    fontSize: 18,
                    fontFamily:
                      user_relation === user_relation_data
                        ? theme.fonts.TitilliumWebSemiBold
                        : theme.fonts.TitilliumWebRegular,
                    color:
                      user_relation === user_relation_data ? "green" : "black"
                  }}
                >
                  {user_relation_data}
                </Text>
              </View>
            );
          })}
        </View>

        {user_relation && (
          <TouchableOpacity
            disabled={!user_relation}
            onPress={() =>
              addRelation({
                relative_id: relative.id,
                user_relation,
                relative_relation
              })
            }
            style={{
              alignSelf: "center",
              backgroundColor: "#d80402",
              padding: 7,
              borderRadius: 30,
              width: 140
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontFamily: theme.fonts.TitilliumWebSemiBold,
                color: "white",
                textAlign: "center"
              }}
            >
              Send Request
            </Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

export default ContentBody;
