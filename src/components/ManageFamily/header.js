import { Text, View } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";
import { api } from "../../libs/api";
import styles from "./styles";

const TermsHeader = props => {
  const { updateUserProfile, auth, navigation } = props;
  const { authUser } = auth;

  const userData = {
    father_name: authUser.father_name,
    father_city: authUser.father_city,
    mother_name: authUser.mother_name,
    mother_city: authUser.mother_city
  };

  return (
    <View style={styles.termsWrapper}>
      <View style={{ justifyContent: "center" }}>
        <Text style={styles.termsHeader}>Manage Family</Text>
      </View>

      <TouchableOpacity
        onPress={() =>
          updateUserProfile({
            authUser: userData,
            navigation: navigation,
            screen: "ManageFamilyScreen",
            url: api.updateUserFamily
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
