import { Text, View } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";
import { api } from "../../libs/api";
import styles from "./styles";

const TermsHeader = props => {
  const { updateUserProfile, authUser } = props;
  const userData = {
    caste_id: authUser.caste_id,
    sub_caste_id: authUser.sub_caste_id,
    caste_updated: true
  };

  return (
    <View style={styles.termsWrapper}>
      <View style={{ justifyContent: "center" }}>
        <Text style={styles.termsHeader}>Manage Caste</Text>
      </View>

      <TouchableOpacity
        onPress={() =>
          updateUserProfile({
            authUser: userData,
            screen: "ManageProfileScreen",
            url: api.updateUserCaste
          })
        }
        style={{
          borderWidth: 1,
          borderColor: "green",
          paddingHorizontal: 8,
          paddingVertical: 3,
          borderRadius: 5
        }}
      >
        <Text style={styles.termsHeader}>NEXT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TermsHeader;
