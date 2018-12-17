import { Form, Input, Item, View } from "native-base";
import React from "react";
import Switch from "../shared/Switch";
import styles from "./styles";
import { TextInputMask } from "react-native-masked-text";

class ProfileForm extends React.Component {
  render() {
    const { auth, setAuthUser } = this.props;
    const { authUser, errors } = auth;

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
              onChangeText={name =>
                setAuthUser({ authUser: { ...authUser, name } })
              }
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
              onChangeText={dob =>
                setAuthUser({ authUser: { ...authUser, dob } })
              }
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
              onChangeText={education =>
                setAuthUser({ authUser: { ...authUser, education } })
              }
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
              onChangeText={occupation =>
                setAuthUser({ authUser: { ...authUser, occupation } })
              }
              style={styles.input(false)}
            />
          </Item>
        </View>

        <View style={{ marginTop: 5 }} />

        <View style={styles.inputGroup(null)}>
          <Item style={styles.inputWrapper}>
            <Input
              multiline
              placeholder="Address (Optional)"
              placeholderTextColor="#000"
              autoCorrect={false}
              value={authUser.address}
              onChangeText={address =>
                setAuthUser({ authUser: { ...authUser, address } })
              }
              style={[
                styles.input(false),
                { height: 100, textAlignVertical: "top" }
              ]}
            />
          </Item>
        </View>

        <View style={styles.buttonGroup}>
          <Item style={styles.buttonWrapper}>
            <Switch
              {...this.props}
              options={["Male", "Female"]}
              selected={authUser.gender}
              onChange={gender =>
                setAuthUser({ authUser: { ...authUser, gender } })
              }
            />
          </Item>

          <Item style={styles.buttonWrapper}>
            <Switch
              {...this.props}
              options={["Married", "Single"]}
              selected={authUser.marital_status}
              onChange={marital_status =>
                setAuthUser({ authUser: { ...authUser, marital_status } })
              }
            />
          </Item>
        </View>
      </Form>
    );
  }
}

export default ProfileForm;
