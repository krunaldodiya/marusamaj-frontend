import { Text, View } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";
import { api } from "../../libs/api";
import styles from "./styles";

const TermsHeader = props => {
  const { updateUserProfile, authUser, navigation } = props;

  return (
    <View style={styles.termsWrapper}>
      <View style={{ justifyContent: "center" }}>
        <Text style={styles.termsHeader}>Manage Profile</Text>
      </View>

      <TouchableOpacity
        onPress={() =>
          updateUserProfile({
            authUser,
            navigation,
            screen: "TabsScreen",
            url: api.updateUserProfile
          })
        }
        style={{
          borderWidth: 1,
          borderColor: "black",
          paddingHorizontal: 8,
          paddingVertical: 3,
          borderRadius: 5
        }}
      >
        <Text style={styles.termsHeader}>FINISH</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TermsHeader;
