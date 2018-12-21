import React from "react";
import { Image, View } from "react-native";
import styles from "./styles";

class ContentBody extends React.Component {
  render() {
    const { avatar } = this.props;

    return (
      <View style={styles.termsBody}>
        <Image
          resizeMode="cover"
          style={{ width: "100%", height: "100%" }}
          source={{ uri: avatar }}
        />
      </View>
    );
  }
}

export default ContentBody;
