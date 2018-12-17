import { Form, Input, Item, View } from "native-base";
import React from "react";
import styles from "./styles";

const ProfileForm = props => {
  const { auth, updateUserData } = props;
  const { authUser, errors } = auth;

  return (
    <Form style={styles.formWrapper}>
      <View style={styles.inputGroup(errors)}>
        <Item style={styles.inputWrapper}>
          <Input
            placeholder={
              errors && errors.errors.father_name
                ? errors.errors.father_name[0]
                : "Father Name"
            }
            placeholderTextColor={errors ? "#e74c3c" : "#000"}
            autoCorrect={false}
            value={authUser.father_name}
            onChangeText={father_name =>
              updateUserData("father_name", father_name)
            }
            style={styles.input(true)}
          />
        </Item>

        <Item style={styles.inputWrapper}>
          <Input
            placeholder={
              errors && errors.errors.father_city
                ? errors.errors.father_city[0]
                : "Father City"
            }
            placeholderTextColor={errors ? "#e74c3c" : "#000"}
            autoCorrect={false}
            value={authUser.father_city}
            onChangeText={father_city =>
              updateUserData("father_city", father_city)
            }
            style={styles.input(false)}
          />
        </Item>
      </View>

      <View style={{ marginTop: 5 }} />

      <View style={styles.inputGroup(errors)}>
        <Item style={styles.inputWrapper}>
          <Input
            placeholder={
              errors && errors.errors.mother_name
                ? errors.errors.mother_name[0]
                : "Mother Name"
            }
            placeholderTextColor={errors ? "#e74c3c" : "#000"}
            autoCorrect={false}
            value={authUser.mother_name}
            onChangeText={mother_name =>
              updateUserData("mother_name", mother_name)
            }
            style={styles.input(true)}
          />
        </Item>

        <Item style={styles.inputWrapper}>
          <Input
            placeholder={
              errors && errors.errors.mother_city
                ? errors.errors.mother_city[0]
                : "Mother City"
            }
            placeholderTextColor={errors ? "#e74c3c" : "#000"}
            autoCorrect={false}
            value={authUser.mother_city}
            onChangeText={mother_city =>
              updateUserData("mother_city", mother_city)
            }
            style={styles.input(false)}
          />
        </Item>
      </View>
    </Form>
  );
};

export default ProfileForm;
