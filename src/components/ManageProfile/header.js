import { Text, View } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";
import { api } from "../../libs/api";
import styles from "./styles";

const TermsHeader = props => {
  const { updateUserProfile, auth, navigation } = props;
  const { authUser } = auth;

  const userData = {
    name: authUser.name,
    dob: authUser.dob,
    education: authUser.education,
    occupation: authUser.occupation,
    gender: authUser.gender,
    marital_status: authUser.marital_status,
    profile_updated: true
  };

  return (
    <View style={styles.termsWrapper}>
      <View style={{ justifyContent: "center" }}>
        <Text style={styles.termsHeader}>Manage Profile</Text>
      </View>

      <TouchableOpacity
        onPress={() =>
          updateUserProfile({
            authUser: userData,
            navigation: navigation,
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
        <Text style={styles.termsHeader}>NEXT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TermsHeader;
