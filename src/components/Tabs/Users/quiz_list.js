import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

getPrize = item => {
  return item.entry_fee * item.total_participants * 0.8;
};

renderItem = (data, navigation) => {
  const { item } = data;

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("QuizDetailScreen", { quiz: item })}
    >
      <View style={styles.newsWrapper}>
        <View style={styles.newsImageWrapper}>
          <Text style={{ textAlign: "center", margin: 2 }}>PRIZE</Text>

          <Text style={{ textAlign: "center", margin: 2 }}>
            {"\u20B9"} {this.getPrize(item)}
          </Text>
        </View>

        <View style={{ flex: 1, marginLeft: 5, marginTop: 5 }}>
          <Text numberOfLines={1} style={styles.newsTitle}>
            {item.category.name}
          </Text>

          <View style={{ flexDirection: "row", marginBottom: 5 }}>
            <Text style={styles.newsDescription}>Host: {item.host.name}</Text>
          </View>

          <View style={{ flexDirection: "row" }}>
            <Text style={styles.newsDate}>
              Entry Fee: {"\u20B9"} {item.entry_fee}
            </Text>
          </View>
        </View>

        <View style={{ padding: 5, width: 60, justifyContent: "center" }}>
          <Text style={styles.newsDate}>{item.time_remained}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

QuizList = props => {
  const { quiz, navigation } = props;
  const { data } = quiz;

  return (
    <FlatList
      data={data}
      keyExtractor={(_, index) => index.toString()}
      renderItem={data => this.renderItem(data, navigation)}
    />
  );
};

export default QuizList;
