import { Text, View } from "native-base";
import React from "react";
import { FlatList } from "react-native";
import theme from "../../libs/theme";

const ContentBody = props => {
  const { quiz } = props.navigation.state.params;

  const questions = JSON.parse(quiz.question_meta);
  const { total_questions } = questions;

  console.log(total_questions);

  return (
    <FlatList
      data={total_questions}
      keyExtractor={(_, index) => index.toString()}
      renderItem={data => {
        const { item, index } = data;

        return (
          <View style={{ padding: 10 }}>
            <View style={{ flexDirection: "row" }}>
              <Text>
                <Text
                  style={{
                    fontSize: 14,
                    color: "#000",
                    fontFamily: theme.fonts.TitilliumWebSemiBold
                  }}
                >
                  ({index + 1})
                </Text>
                <Text>&nbsp;</Text>
                <Text
                  style={{
                    fontSize: 14,
                    color: "#333",
                    fontFamily: theme.fonts.TitilliumWebRegular
                  }}
                >
                  {item.question}
                </Text>
              </Text>
            </View>

            <View style={{ marginTop: 5 }}>
              <Text
                style={{
                  fontSize: 14,
                  color: "green",
                  fontFamily: theme.fonts.TitilliumWebSemiBold
                }}
              >
                answer: {item[item.answer]}
              </Text>
            </View>
          </View>
        );
      }}
    />
  );
};

export default ContentBody;
