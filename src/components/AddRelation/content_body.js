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

    this.state = {
      user_relation: null,
      relative_relation: null,
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
    const { relative } = navigation.state.params;

    if (authUser.relatives.length) {
      const relation = authUser.relatives.filter(
        rel => relative.id === rel.relative_id
      )[0];

      this.setState({ relation });
    }
  };

  render() {
    const { navigation, auth, addRelation } = this.props;
    const { user_relation, relative_relation, relation } = this.state;
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

        {!relation && (
          <View style={{ flex: 1 }}>
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
                          user_relation === user_relation_data
                            ? "green"
                            : "black"
                      }}
                    >
                      {user_relation_data}
                    </Text>
                  </View>
                );
              })}
            </View>

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
          </View>
        )}

        {relation && (
          <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }} />

            <View
              style={{
                justifyContent: "space-around",
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
                  <Text>
                    {relation.status
                      ? `Added as ${relation.user_relation}`
                      : `Request as ${relation.user_relation}`}
                  </Text>
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
    );
  }
}

export default ContentBody;
