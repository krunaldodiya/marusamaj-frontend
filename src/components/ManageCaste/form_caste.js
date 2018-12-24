import { Text, View } from "native-base";
import React from "react";
import { FlatList, TouchableOpacity } from "react-native";
import theme from "../../libs/theme";

class CasteForm extends React.Component {
  showSubCasteData = (data, sub_caste_id, updateUserData) => {
    const { item } = data;

    return (
      <TouchableOpacity
        onPress={() => updateUserData({ sub_caste_id: item.id })}
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
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  showCasteData = (data, caste_id, updateUserData) => {
    const { item } = data;

    return (
      <TouchableOpacity
        onPress={() => updateUserData({ caste_id: item.id })}
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
              item.id == caste_id
                ? theme.fonts.TitilliumWebSemiBold
                : theme.fonts.TitilliumWebRegular,
            color: item.id == caste_id ? "green" : "black"
          }}
        >
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  showHeader = (selected_caste, updateUserData) => {
    return (
      <View
        style={{
          paddingHorizontal: 5,
          paddingVertical: 10,
          flexDirection: "row",
          justifyContent: "space-between"
        }}
      >
        <Text style={{ fontFamily: theme.fonts.TitilliumWebSemiBold }}>
          {selected_caste.name}
        </Text>

        <TouchableOpacity
          onPress={() => updateUserData({ caste_id: null, sub_caste_id: null })}
          style={{ marginRight: 10 }}
        >
          <Text
            style={{
              fontFamily: theme.fonts.TitilliumWebSemiBold,
              fontSize: 13,
              color: "#d80402"
            }}
          >
            Change
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    const { castes, authUser, updateUserData } = this.props;    
    const { caste_id, sub_caste_id } = authUser;

    const data =
      caste_id === null
        ? castes.data
        : castes.data.filter(caste => caste.id == caste_id)[0]["sub_castes"];

    return (
      <View style={{ padding: 5 }}>
        {caste_id &&
          this.showHeader(
            castes.data.filter(caste => caste.id == caste_id)[0],
            updateUserData
          )}

        <FlatList
          data={data}
          extraData={authUser}
          keyExtractor={(_, index) => index.toString()}
          renderItem={data => {
            return caste_id === null
              ? this.showCasteData(data, caste_id, updateUserData)
              : this.showSubCasteData(data, sub_caste_id, updateUserData);
          }}
        />
      </View>
    );
  }
}

export default CasteForm;
