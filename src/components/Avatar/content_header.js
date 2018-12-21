import { Body, Header, Left, Text, Icon, Right } from "native-base";
import React from "react";
import styles from "./styles";

import ImagePicker from "react-native-image-picker";

const uploadAvatar = changeAvatar => {
  const options = {
    title: "Select Avatar",
    customButtons: [{ name: "fb", title: "Choose Photo from Facebook" }],
    storageOptions: {
      skipBackup: true,
      path: "images"
    }
  };

  ImagePicker.showImagePicker(options, response => {    
    changeAvatar(response.uri);
  });
};

class ContentHeader extends React.Component {
  render() {
    const { auth, navigation, changeAvatar } = this.props;
    const { authUser } = auth;
    const { user } = this.props.navigation.state.params;

    return (
      <Header style={styles.termsWrapper} androidStatusBarColor="#d80402">
        <Left>
          <Icon
            type="MaterialIcons"
            name="arrow-back"
            style={styles.termsIcon}
            onPress={() => navigation.goBack()}
          />
        </Left>

        <Body>
          <Text numberOfLines={1} style={styles.termsHeader}>
            {user.name}
          </Text>
        </Body>

        <Right>
          {authUser.id === user.id && (
            <Icon
              type="MaterialIcons"
              name="photo-camera"
              style={styles.termsIcon}
              onPress={() => uploadAvatar(changeAvatar)}
            />
          )}
        </Right>
      </Header>
    );
  }
}

export default ContentHeader;
