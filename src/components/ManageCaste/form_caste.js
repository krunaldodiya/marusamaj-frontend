import React from "react";
import { FlatList, Text, View } from "react-native";
import { Container } from "native-base";

renderItem = (data, navigation) => {
  const { item } = data;

  console.log(item);
  
  return (
    <View style={{ margin: 5 }}>
      <Text>{item.name}</Text>
    </View>
  );
};

const CasteForm = props => {
  const { navigation, castes } = props;
  const { data } = castes;

  return (
    <Container style={{ padding: 5 }}>
      <FlatList
        data={data}
        keyExtractor={(_, index) => index.toString()}
        renderItem={data => renderItem(data, navigation)}
      />
    </Container>
  );
};

export default CasteForm;
