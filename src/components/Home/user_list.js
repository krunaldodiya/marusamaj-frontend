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
      onPress={() => navigation.navigate("QuizDetailScreen", { user: item })}
    >
      <View style={styles.newsWrapper}>
        <View style={{ padding: 5, width: 60, justifyContent: "center" }}>
          <Text style={styles.newsDate}>{item.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

UserList = props => {
  const { users, navigation } = props;
  const { data } = users;

  return (
    <FlatList
      data={data}
      keyExtractor={(_, index) => index.toString()}
      renderItem={data => this.renderItem(data, navigation)}
    />
  );
};

export default UserList;
