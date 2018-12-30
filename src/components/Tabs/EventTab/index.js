import { Text, View } from "native-base";
import React from "react";
import theme from "../../../libs/theme";

class EventTab extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, padding: 20 }}>
        <Text
          style={{
            fontFamily: theme.fonts.TitilliumWebRegular,
            fontSize: 16
          }}
        >
          No events yet.
        </Text>
      </View>
    );
  }
}

export default EventTab;
