import { Text, View } from "native-base";
import React from "react";

class EventTab extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, padding: 20 }}>
        <Text>No Events Yet.</Text>
      </View>
    );
  }
}

export default EventTab;
