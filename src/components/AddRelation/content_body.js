import { Text, View, Button } from "native-base";
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

    const { auth, navigation } = props;
    const { authUser } = auth;
    const { relative } = navigation.state.params;

    this.state = {
      from: authUser,
      to: relative,
      from_relation: null,
      to_relation: null,
      relation: null
    };
  }

  componentDidMount() {
    this.setRelation(this.props);
  }

  componentWillReceiveProps(props) {
    this.setRelation(props);
  }

  setRelation = props => {
    const { auth, navigation } = props;
    const { authUser } = auth;
    const { relatives } = authUser;
    const { relative } = navigation.state.params;

    if (relatives.length) {
      const relation = relatives.filter(data => relative.id === data.from)[0];
      this.setState({ relation });
    }
  };

  render() {
    const { addRelation } = this.props;
    const { from, to, from_relation, to_relation, relation } = this.state;
    const user_relationship = user_relations[to.gender][to.marital_status];

    return (
      <View style={{ flex: 1, padding: 10 }}>
        <View style={{ margin: 10 }}>
          <View style={{ marginBottom: 5 }}>
            <Text
              style={{
                fontSize: 22,
                fontFamily: theme.fonts.TitilliumWebSemiBold,
                color: "black"
              }}
            >
              {to.name}
            </Text>
          </View>

          {relation && (
            <View style={{ marginBottom: 5 }}>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: theme.fonts.TitilliumWebRegular,
                  color: "red"
                }}
              >
                {relation.to_relation}
              </Text>
            </View>
          )}
        </View>

        {!relation && (
          <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
              {user_relationship.map((user_relation, index) => {
                const { gender } = from;
                const relative_relation =
                  relative_relations[user_relation][gender];

                return (
                  <View
                    style={{ marginHorizontal: 20, marginVertical: 10 }}
                    key={index}
                  >
                    <Text
                      onPress={() =>
                        this.setState({
                          from_relation: user_relation,
                          to_relation: relative_relation
                        })
                      }
                      style={{
                        fontSize: 18,
                        fontFamily:
                          from_relation === user_relation
                            ? theme.fonts.TitilliumWebSemiBold
                            : theme.fonts.TitilliumWebRegular,
                        color:
                          from_relation === user_relation ? "green" : "black"
                      }}
                    >
                      {user_relation}
                    </Text>
                  </View>
                );
              })}
            </View>

            <TouchableOpacity
              onPress={() =>
                addRelation({
                  from: from.id,
                  to: to.id,
                  from_relation,
                  to_relation
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
          </View>
        )}

        {relation && (
          <View style={{ flex: 1 }}>
            {relation.user_id === to.id && (
              <View style={{ flex: 1, justifyContent: "flex-end" }}>
                <View
                  style={{
                    justifyContent: "center",
                    flexDirection: "row"
                  }}
                >
                  <View style={{ margin: 10 }}>
                    <Button
                      small
                      rounded
                      bordered
                      success
                    >
                      <Text>accept</Text>
                    </Button>
                  </View>

                  <View style={{ margin: 10 }}>
                    <Button
                      small
                      rounded
                      bordered
                      danger
                    >
                      <Text>decline</Text>
                    </Button>
                  </View>
                </View>
              </View>
            )}

            {relation.user_id === from.id && (
              <View style={{ flex: 1, justifyContent: "flex-end" }}>
                <View
                  style={{
                    justifyContent: "center",
                    flexDirection: "row"
                  }}
                >
                  <View style={{ margin: 10 }}>
                    <Button
                      small
                      rounded
                      bordered
                      success={relation.status ? true : false}
                      danger={relation.status ? false : true}
                    >
                      <Text>{relation.status ? `Added` : `Requested`}</Text>
                    </Button>
                  </View>

                  <View style={{ margin: 10 }}>
                    <Button
                      small
                      rounded
                      bordered
                      success={relation.status ? true : false}
                      danger={relation.status ? false : true}
                    >
                      <Text>cancel</Text>
                    </Button>
                  </View>
                </View>
              </View>
            )}
          </View>
        )}
      </View>
    );
  }
}

export default ContentBody;
