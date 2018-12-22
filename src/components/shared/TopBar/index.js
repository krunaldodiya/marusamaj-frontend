import { Icon } from "native-base";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

const TobBar = props => {
  const { toggleDrawer, navigation } = props;

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={() => toggleDrawer({ isOpen: true })}>
          <Icon
            type="MaterialIcons"
            name="menu"
            style={{ fontSize: 28, textAlign: "center", color: "white" }}
          />
        </TouchableOpacity>
      </View>

      <View style={{ flex: 7 }}>
        <Text style={styles.name}>MaruSamaj</Text>
      </View>

      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={() => navigation.push("SearchScreen")}>
          <Icon
            type="MaterialIcons"
            name="filter-list"
            style={{ fontSize: 28, textAlign: "center", color: "white" }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TobBar;
