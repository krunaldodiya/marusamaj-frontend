import { Container, Text, View, Button } from "native-base";
import React from "react";
import { FlatList } from "react-native";
import theme from "../../libs/theme";

const CasteForm = props => {
  const { castes } = props;
  const { data } = castes;

  return (
    <View style={{ padding: 5 }}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={data => {
          return (
            <View
              style={{
                margin: 5,
                paddingLeft: 15,
                paddingVertical: 10,
                borderRadius: 20,
              }}
            >
              <Text
                style={{
                  fontFamily: theme.fonts.TitilliumWebRegular,
                  color: "black"
                }}
              >
                {data.item.caste.name} ({data.item.name})
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default CasteForm;
