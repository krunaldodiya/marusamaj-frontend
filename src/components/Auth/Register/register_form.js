import { Button, Form, Input, Item, Text, View } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";
import theme from "../../../libs/theme";
import styles from "./styles";

const RegisterForm = props => {
  const { guest, navigation, requestOtp, handleOtpInput } = props;
  const { mobile, errors, loading } = guest;

  return (
    <React.Fragment>
      <Form style={styles.formWrapper}>
        <Item style={styles.inputWrapper}>
          <Input
            placeholder={errors ? errors.errors.mobile[0] : "9426726815"}
            placeholderTextColor={errors ? "#e74c3c" : "gray"}
            keyboardType="default"
            maxLength={10}
            value={mobile}
            onChangeText={number => handleOtpInput({ mobile: number })}
            style={styles.input(errors)}
          />
        </Item>

        <Item style={styles.inputWrapper}>
          <Input
            placeholder={errors ? errors.errors.mobile[0] : "username"}
            placeholderTextColor={errors ? "#e74c3c" : "gray"}
            keyboardType="default"
            maxLength={10}
            value={mobile}
            onChangeText={number => handleOtpInput({ mobile: number })}
            style={styles.input(errors)}
          />
        </Item>

        <Item style={styles.inputWrapper}>
          <Input
            secureTextEntry
            placeholder={errors ? errors.errors.mobile[0] : "password"}
            placeholderTextColor={errors ? "#e74c3c" : "gray"}
            keyboardType="default"
            maxLength={10}
            value={mobile}
            onChangeText={number => handleOtpInput({ mobile: number })}
            style={styles.input(errors)}
          />
        </Item>

        <Item style={styles.submitButtonWrapper}>
          <Button
            rounded
            small
            disabled={loading}
            style={styles.submitButton}
            onPress={() => requestOtp({ mobile, navigation, mode: "request" })}
          >
            <Text style={styles.submitButtonText}>REGISTER</Text>
          </Button>
        </Item>
      </Form>

      <View style={{ padding: 15, backgroundColor: "#eee" }}>
        <TouchableOpacity onPress={() => navigation.replace("LoginScreen")}>
          <Text
            style={{
              textAlign: "center",
              color: "green",
              fontSize: 18,
              fontFamily: theme.fonts.TitilliumWebRegular
            }}
          >
            click here to login
          </Text>
        </TouchableOpacity>
      </View>
    </React.Fragment>
  );
};

export default RegisterForm;
