import { Text, View } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";
import { api } from "../../libs/api";
import styles from "./styles";

const TermsHeader = props => {
  const { updateAuthUser, authUser, navigation } = props;

  return (
    <View style={styles.termsWrapper}>
      <View style={{ justifyContent: "center" }}>
        <Text style={styles.termsHeader}>Manage Profile</Text>
      </View>

      <TouchableOpacity
        onPress={() =>
          updateAuthUser({
            authUser: {
              ...authUser,
              profile_updated: true
            },
            navigation,
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
