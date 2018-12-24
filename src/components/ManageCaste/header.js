import { Text, View } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";
import { api } from "../../libs/api";
import styles from "./styles";

const TermsHeader = props => {
  const { updateAuthUser, authUser, navigation } = props;
  const { caste_id, sub_caste_id } = authUser;

  return (
    <View style={styles.termsWrapper}>
      <View
        style={{
          justifyContent: "center",
          paddingHorizontal: 8,
          paddingVertical: 3
        }}
      >
        <Text style={styles.termsHeader}>Manage Caste</Text>
      </View>

      {caste_id && sub_caste_id && (
        <TouchableOpacity
          onPress={() =>
            updateAuthUser({
              authUser: {
                ...authUser,
                caste_updated: true
              },
              navigation,
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
      )}
    </View>
  );
};

export default TermsHeader;
