import {
  Body,
  Content,
  Left,
  List,
  ListItem,
  Separator,
  Text,
  Thumbnail,
  View
} from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";
import theme from "../../libs/theme";
import styles from "./styles";

getPrize = item => {
  return item.entry_fee * item.total_participants * 0.8;
};

const ContentBody = props => {
  const { navigation } = props;
  const { quiz } = navigation.state.params;

  return (
    <Content style={styles.termsBody}>
      <List>
        <ListItem avatar>
          <Left>
            <Thumbnail
              source={{
                uri:
                  "https://cdn.iconscout.com/icon/free/png-256/avatar-369-456321.png"
              }}
            />
          </Left>
          <Body>
            <Text
              style={{
                fontSize: 16,
                color: "#000",
                fontFamily: theme.fonts.TitilliumWebSemiBold
              }}
            >
              {quiz.host.name}
            </Text>
            <Text
              note
              style={{
                marginTop: 2,
                fontSize: 12,
                color: "gray",
                fontFamily: theme.fonts.TitilliumWebRegular
              }}
            >
              {quiz.created_at}
            </Text>
            <Text
              note
              style={{
                marginTop: 5,
                fontSize: 14,
                color: "green",
                fontFamily: theme.fonts.TitilliumWebRegular
              }}
            >
              Host Quiz & Earn Points
            </Text>
          </Body>
        </ListItem>
      </List>

      <Separator bordered>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text
              style={{
                fontFamily: theme.fonts.TitilliumWebRegular,
                fontSize: 14,
                color: "gray"
              }}
            >
              Time Remained
            </Text>
          </View>
        </View>
      </Separator>

      <ListItem>
        <Text
          style={{ fontFamily: theme.fonts.TitilliumWebRegular, fontSize: 14 }}
        >
          {quiz.time_remained}
        </Text>
      </ListItem>

      <Separator bordered>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text
              style={{
                fontFamily: theme.fonts.TitilliumWebRegular,
                fontSize: 14,
                color: "gray"
              }}
            >
              Prize
            </Text>
          </View>

          {getPrize(quiz) > 0 && (
            <View style={{ marginRight: 20 }}>
              <Text
                style={{
                  fontFamily: theme.fonts.TitilliumWebRegular,
                  fontSize: 14,
                  color: "green"
                }}
              >
                See Distribution
              </Text>
            </View>
          )}
        </View>
      </Separator>

      <ListItem>
        <Text
          style={{
            fontFamily: theme.fonts.TitilliumWebRegular,
            fontSize: 14,
            letterSpacing: 1
          }}
        >
          {"\u20B9"}
          {getPrize(quiz)}
        </Text>
      </ListItem>

      <Separator bordered>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text
              style={{
                fontFamily: theme.fonts.TitilliumWebRegular,
                fontSize: 14,
                color: "gray"
              }}
            >
              Questions
            </Text>
          </View>

          <TouchableOpacity
            style={{ marginRight: 20 }}
            onPress={() => navigation.push("QuestionsScreen", { quiz })}
          >
            <Text
              style={{
                fontFamily: theme.fonts.TitilliumWebRegular,
                fontSize: 14,
                color: "green"
              }}
            >
              List of Questions
            </Text>
          </TouchableOpacity>
        </View>
      </Separator>

      <ListItem>
        <Text
          style={{ fontFamily: theme.fonts.TitilliumWebRegular, fontSize: 14 }}
        >
          <Text
            style={{
              fontFamily: theme.fonts.TitilliumWebSemiBold,
              fontSize: 14
            }}
          >
            {quiz.answerable_questions}
          </Text>{" "}
          questions out of{" "}
          <Text
            style={{
              fontFamily: theme.fonts.TitilliumWebSemiBold,
              fontSize: 14
            }}
          >
            {quiz.total_questions}
          </Text>{" "}
          questions will be asked.
        </Text>
      </ListItem>

      <Separator bordered>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text
              style={{
                fontFamily: theme.fonts.TitilliumWebRegular,
                fontSize: 14,
                color: "gray"
              }}
            >
              Winners
            </Text>
          </View>
          <View style={{ marginRight: 20 }}>
            <Text
              style={{
                fontFamily: theme.fonts.TitilliumWebRegular,
                fontSize: 14,
                color: "green"
              }}
            >
              List of Participants
            </Text>
          </View>
        </View>
      </Separator>

      <ListItem>
        <Text
          style={{ fontFamily: theme.fonts.TitilliumWebRegular, fontSize: 14 }}
        >
          <Text
            style={{
              fontFamily: theme.fonts.TitilliumWebSemiBold,
              fontSize: 14
            }}
          >
            {quiz.total_winners}
          </Text>{" "}
          winners will be selected out of{" "}
          <Text
            style={{
              fontFamily: theme.fonts.TitilliumWebSemiBold,
              fontSize: 14
            }}
          >
            {quiz.total_participants}
          </Text>{" "}
          participants based on accuracy and timing.
        </Text>
      </ListItem>

      <View style={{ alignSelf: "center", marginTop: 20 }}>
        <TouchableOpacity
          onPress={() => null}
          style={{
            flexDirection: "row",
            paddingVertical: 8,
            paddingHorizontal: 20,
            borderRadius: 20,
            backgroundColor: "indigo"
          }}
        >
          <Text
            style={{
              padding: 0,
              margin: 0,
              fontFamily: theme.fonts.TitilliumWebSemiBold,
              fontSize: 14,
              color: "white"
            }}
          >
            JOIN QUIZ
          </Text>
          <Text
            style={{
              marginHorizontal: 5,
              fontFamily: theme.fonts.TitilliumWebSemiBold,
              fontSize: 12,
              color: "white"
            }}
          >
            @
          </Text>
          <Text
            style={{
              padding: 0,
              margin: 0,
              fontFamily: theme.fonts.TitilliumWebSemiBold,
              fontSize: 14,
              color: "white",
              letterSpacing: 1
            }}
          >
            {"\u20B9"}
            {quiz.entry_fee}
          </Text>
        </TouchableOpacity>
      </View>
    </Content>
  );
};

export default ContentBody;
