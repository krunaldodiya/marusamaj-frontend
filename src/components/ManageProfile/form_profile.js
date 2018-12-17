import { Form, Input, Item, View } from "native-base";
import React from "react";
import { TextInputMask } from "react-native-masked-text";
import Switch from "../shared/Switch";
import styles from "./styles";

class ProfileForm extends React.Component {
  render() {
    const { authUser, errors, updateUserData } = this.props;

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
              onChangeText={name => updateUserData({ name })}
              style={styles.input(true)}
            />
          </Item>

          <Item style={styles.inputWrapper}>
            <TextInputMask
              refInput={ref => (this.myDateText = ref)}
              type={"datetime"}
              options={{ format: "DD-MM-YYYY" }}
              placeholder={
                errors && errors.errors.dob
                  ? errors.errors.dob[0]
                  : "25-08-1990"
              }
              placeholderTextColor={errors ? "#e74c3c" : "#000"}
              autoCorrect={false}
              value={authUser.dob}
              onChangeText={dob => updateUserData({ dob })}
              style={[styles.input(false), { width: "100%" }]}
            />
          </Item>
        </View>

        <View style={{ marginTop: 5 }} />

        <View style={styles.inputGroup(errors)}>
          <Item style={styles.inputWrapper}>
            <Input
              placeholder={
                errors && errors.errors.education
                  ? errors.errors.education[0]
                  : "અભ્યાસ"
              }
              placeholderTextColor={errors ? "#e74c3c" : "#000"}
              autoCorrect={false}
              value={authUser.education}
              onChangeText={education => updateUserData({ education })}
              style={styles.input(true)}
            />
          </Item>

          <Item style={styles.inputWrapper}>
            <Input
              placeholder={
                errors && errors.errors.occupation
                  ? errors.errors.occupation[0]
                  : "વ્ય​વસાય​"
              }
              placeholderTextColor={errors ? "#e74c3c" : "#000"}
              autoCorrect={false}
              value={authUser.occupation}
              onChangeText={occupation => updateUserData({ occupation })}
              style={styles.input(false)}
            />
          </Item>
        </View>

        <View style={{ marginTop: 5 }} />

        <View style={styles.inputGroup(null)}>
          <Item style={styles.inputWrapper}>
            <Input
              multiline
              placeholder="ગામ નુ નામ"
              placeholderTextColor="#000"
              autoCorrect={false}
              value={authUser.city}
              onChangeText={city => updateUserData({ city })}
              style={styles.input(false)}
            />
          </Item>
        </View>

        <View style={styles.buttonGroup}>
          <Item style={styles.buttonWrapper}>
            <Switch
              {...this.props}
              options={["Male", "Female"]}
              selected={authUser.gender}
              onChange={gender => updateUserData({ gender })}
            />
          </Item>

          <Item style={styles.buttonWrapper}>
            <Switch
              {...this.props}
              options={["Married", "Single"]}
              selected={authUser.marital_status}
              onChange={marital_status => updateUserData({ marital_status })}
            />
          </Item>
        </View>
      </Form>
    );
  }
}

export default ProfileForm;
