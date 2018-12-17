import { Text, View } from "native-base";
import React from "react";
import { FlatList, TouchableOpacity } from "react-native";
import theme from "../../libs/theme";

updateUserData = item => {
  const authUser = {
    ...this.props.auth.authUser,
    caste_id: item.caste_id,
    sub_caste_id: item.id
  };

  this.props.setAuthUser({ authUser });
};

const CasteForm = props => {
  const { castes, auth } = props;
  const { authUser } = auth;

  return (
    <View style={{ padding: 5 }}>
      <FlatList
        data={castes.data}
        extraData={authUser}
        keyExtractor={(_, index) => index.toString()}
        renderItem={data => {
          const { item } = data;

          return (
            <TouchableOpacity
              onPress={() => updateUserData(item)}
              style={{
                margin: 5,
                paddingLeft: 15,
                paddingVertical: 10,
                borderRadius: 20
              }}
            >
              <Text
                style={{
                  fontFamily:
                    item.id == authUser.sub_caste_id
                      ? theme.fonts.TitilliumWebSemiBold
                      : theme.fonts.TitilliumWebRegular,
                  color: item.id == authUser.sub_caste_id ? "green" : "black"
                }}
              >
                {item.caste.name} ({item.name})
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default CasteForm;
