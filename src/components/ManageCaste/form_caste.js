import { Text, View } from "native-base";
import React from "react";
import { FlatList, TouchableOpacity } from "react-native";
import theme from "../../libs/theme";

const CasteForm = props => {
  const { castes, authUser, updateCaste } = props;
  const { sub_caste_id } = authUser;
  const { data } = castes;

  return (
    <View style={{ padding: 5 }}>
      <FlatList
        data={data}
        extraData={authUser}
        keyExtractor={(item, index) => index.toString()}
        renderItem={data => {
          const { item } = data;

          return (
            <TouchableOpacity
              onPress={() => updateCaste(item)}
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
                    item.id == sub_caste_id
                      ? theme.fonts.TitilliumWebSemiBold
                      : theme.fonts.TitilliumWebRegular,
                  color: item.id == sub_caste_id ? "green" : "black"
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
