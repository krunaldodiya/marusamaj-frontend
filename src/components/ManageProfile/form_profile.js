import { Button, Form, Input, Item, Text, View } from "native-base";
import React from "react";
import Switch from "../shared/Switch";
import styles from "./styles";

const citiesList = require("../../../assets/js/cities.json");

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);

    const { authUser } = props.auth;
    const { city, state } = authUser;

    this.state = {
      cities: [],
      selectedLocation: city && state ? `${city}, ${state}` : null,
      authUser
    };
  }

  handleLocationChange = selectedLocation => {
    this.setState({ selectedLocation });

    if (selectedLocation.length > 2) {
      const filteredCities = citiesList.filter(city => {
        return city.name.match(new RegExp(`^${selectedLocation}`, "gi"));
      });

      this.setState({ cities: filteredCities });
    }
  };

  handleLocationClear = () => {
    const authUser = { ...this.state.authUser, city: null, state: null };

    this.setState({
      selectedLocation: null,
      authUser
    });
  };

  handleLocationSelect = city => {
    const authUser = {
      ...this.state.authUser,
      city: city.name,
      state: city.state
    };

    this.setState({
      cities: [],
      selectedLocation: `${city.name}, ${city.state}`,
      authUser
    });
  };

  updateUserData = (key, value) => {
    const authUser = { ...this.state.authUser };
    authUser[key] = value;

    this.setState({ authUser });
  };

  render() {
    const { auth, navigation, createUserProfile } = this.props;
    const { errors, loading } = auth;
    const { authUser } = this.state;

    return (
      <Form style={styles.formWrapper}>
        <View style={styles.inputGroup(errors)}>
          <Item style={styles.inputWrapper}>
            <Input
              placeholder={
                errors && errors.errors.name
                  ? errors.errors.name[0]
                  : "Your Name"
              }
              placeholderTextColor={errors ? "#e74c3c" : "#000"}
              autoCorrect={false}
              value={authUser.name}
              onChangeText={name => this.updateUserData("name", name)}
              style={styles.input(true)}
            />
          </Item>

          <Item style={styles.inputWrapper}>
            <Input
              placeholder={
                errors && errors.errors.name
                  ? errors.errors.name[0]
                  : "DD/MM/YYYY"
              }
              placeholderTextColor={errors ? "#e74c3c" : "#000"}
              autoCorrect={false}
              value={authUser.name}
              onChangeText={name => this.updateUserData("name", name)}
              style={styles.input(false)}
            />
          </Item>
        </View>

        <View style={{ marginTop: 5 }} />

        <View style={styles.inputGroup(errors)}>
          <Item style={styles.inputWrapper}>
            <Input
              placeholder={
                errors && errors.errors.name ? errors.errors.name[0] : "અભ્યાસ"
              }
              placeholderTextColor={errors ? "#e74c3c" : "#000"}
              autoCorrect={false}
              value={authUser.name}
              onChangeText={name => this.updateUserData("name", name)}
              style={styles.input(true)}
            />
          </Item>

          <Item style={styles.inputWrapper}>
            <Input
              placeholder={
                errors && errors.errors.name
                  ? errors.errors.name[0]
                  : "વ્ય​વસાય​"
              }
              placeholderTextColor={errors ? "#e74c3c" : "#000"}
              autoCorrect={false}
              value={authUser.name}
              onChangeText={name => this.updateUserData("name", name)}
              style={styles.input(false)}
            />
          </Item>
        </View>

        <View style={{ marginTop: 5 }} />

        <View style={styles.inputGroup(errors)}>
          <Item style={styles.inputWrapper}>
            <Input
              multiline
              placeholder={
                errors && errors.errors.name
                  ? errors.errors.name[0]
                  : "Address (Optional)"
              }
              placeholderTextColor={errors ? "#e74c3c" : "#000"}
              autoCorrect={false}
              value={authUser.name}
              onChangeText={name => this.updateUserData("name", name)}
              style={styles.input(false)}
            />
          </Item>
        </View>

        <View style={styles.buttonGroup}>
          <Item style={styles.inputWrapper}>
            <Switch
              {...this.props}
              options={["Male", "Female"]}
              selected={authUser.gender}
              onChange={gender => this.updateUserData("gender", gender)}
            />
          </Item>

          <Item style={styles.inputWrapper}>
            <Switch
              {...this.props}
              options={["Married", "Single"]}
              selected={authUser.marital_status}
              onChange={maritalStatus =>
                this.updateUserData("maritalStatus", maritalStatus)
              }
            />
          </Item>

          <Item style={styles.submitButtonWrapper}>
            <Button
              rounded
              small
              disabled={loading}
              style={styles.submitButton}
              onPress={() =>
                createUserProfile({
                  authUser: { ...authUser, profile_updated: true },
                  navigation
                })
              }
            >
              <Text style={styles.submitButtonText}>SUBMIT</Text>
            </Button>
          </Item>
        </View>
      </Form>
    );
  }
}

export default ProfileForm;