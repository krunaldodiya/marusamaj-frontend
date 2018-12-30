import { Form, Input, Item, View } from "native-base";
import React from "react";
import { TextInputMask } from "react-native-masked-text";
import Switch from "../shared/Switch";
import styles from "./styles";

class ProfileForm extends React.Component {
  render() {
    const { authUser, errors, updateUserData, avoidKeyboardView } = this.props;

    return (
      <Form style={styles.formWrapper}>
        <Item style={styles.inputWrapper}>
          <Input
            onFocus={() => avoidKeyboardView(false)}
            placeholder={
              errors && errors.errors.name ? errors.errors.name[0] : "Full Name"
            }
            placeholderTextColor={
              errors && errors.errors.name ? "#e74c3c" : "#000"
            }
            autoCorrect={false}
            value={authUser.name}
            onChangeText={name => updateUserData({ name })}
            style={styles.input(errors && errors.errors.name)}
          />
        </Item>

        <Item style={styles.inputWrapper}>
          <TextInputMask
            onFocus={() => avoidKeyboardView(false)}
            refInput={ref => (this.myDateText = ref)}
            type={"datetime"}
            options={{ format: "DD-MM-YYYY" }}
            placeholder={
              errors && errors.errors.dob ? errors.errors.dob[0] : "25-08-1990"
            }
            placeholderTextColor={errors ? "#e74c3c" : "#000"}
            autoCorrect={false}
            value={authUser.dob}
            onChangeText={dob => updateUserData({ dob })}
            style={[
              styles.input(errors && errors.errors.name),
              { width: "88%" }
            ]}
          />
        </Item>

        <Item style={styles.inputWrapper}>
          <Input
            onFocus={() => avoidKeyboardView(false)}
            placeholder={
              errors && errors.errors.education
                ? errors.errors.education[0]
                : "અભ્યાસ"
            }
            placeholderTextColor={
              errors && errors.errors.education ? "#e74c3c" : "#000"
            }
            autoCorrect={false}
            value={authUser.education}
            onChangeText={education => updateUserData({ education })}
            style={styles.input(errors && errors.errors.education)}
          />
        </Item>

        <Item style={styles.inputWrapper}>
          <Input
            onFocus={() => avoidKeyboardView(true)}
            placeholder={
              errors && errors.errors.occupation
                ? errors.errors.occupation[0]
                : "વ્ય​વસાય​"
            }
            placeholderTextColor={
              errors && errors.errors.occupation ? "#e74c3c" : "#000"
            }
            autoCorrect={false}
            value={authUser.occupation}
            onChangeText={occupation => updateUserData({ occupation })}
            style={styles.input(errors && errors.errors.occupation)}
          />
        </Item>

        <Item style={styles.inputWrapper}>
          <Input
            onFocus={() => avoidKeyboardView(true)}
            placeholder={
              errors && errors.errors.father_city
                ? errors.errors.father_city[0]
                : "ગામ નુ નામ"
            }
            placeholderTextColor={
              errors && errors.errors.father_city ? "#e74c3c" : "#000"
            }
            autoCorrect={false}
            value={authUser.father_city}
            onChangeText={father_city => updateUserData({ father_city })}
            style={styles.input(errors && errors.errors.father_city)}
          />
        </Item>

        <Item style={styles.inputWrapper}>
          <Input
            onFocus={() => avoidKeyboardView(true)}
            placeholder={
              errors && errors.errors.mother_city
                ? errors.errors.mother_city[0]
                : "મોસાડ નુ નામ"
            }
            placeholderTextColor={
              errors && errors.errors.mother_city ? "#e74c3c" : "#000"
            }
            autoCorrect={false}
            value={authUser.mother_city}
            onChangeText={mother_city => updateUserData({ mother_city })}
            style={styles.input(errors && errors.errors.mother_city)}
          />
        </Item>

        <View style={styles.buttonGroup}>
          <Item style={styles.buttonWrapper}>
            <Switch
              {...this.props}
              width={250}
              options={["Male", "Female"]}
              selected={authUser.gender}
              onChange={gender => updateUserData({ gender })}
            />
          </Item>

          <Item style={styles.buttonWrapper}>
            <Switch
              {...this.props}
              width={250}
              options={["Married", "Single", "Divorcee"]}
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
