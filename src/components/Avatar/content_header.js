import { Body, Header, Icon, Left, Right, Text } from "native-base";
import React from "react";
import ImagePicker from "react-native-image-crop-picker";
import RNFetchBlob from "rn-fetch-blob";
import styles from "./styles";

const uploadAvatar = changeAvatar => {
  ImagePicker.openPicker({
    cropping: true
  })
    .then(response => {
      changeAvatar({ loading: true });

      const { height, width, x, y } = response.cropRect;
      const cropData = `upload/c_crop,h_${height},w_${width},x_${x},y_${y}`;

      RNFetchBlob.fetch(
        "POST",
        "https://api.cloudinary.com/v1_1/marusamaj/image/upload?upload_preset=default",
        {
          "Content-Type": "multipart/form-data"
        },
        [
          {
            name: "file",
            filename: "filename",
            type: response.mime,
            data: RNFetchBlob.wrap(response.path)
          }
        ]
      )
        .then(response => response.json())
        .then(response => {
          const avatar = response.secure_url.replace('upload', cropData);
          changeAvatar({ avatar, loading: false });
        });
    })
    .catch(e => {
      console.log(e);
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
