import { Button, Form, Input, Item, Text, View } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";
import theme from "../../../libs/theme";
import styles from "./styles";

const LoginForm = props => {
  const { guest, navigation, requestOtp, handleOtpInput } = props;
  const { mobile, errors, loading } = guest;

  return (
    <React.Fragment>
      <Form style={styles.formWrapper}>
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
            <Text style={styles.submitButtonText}>LOGIN</Text>
          </Button>
        </Item>
      </Form>

      <View style={{ padding: 15 }}>
        <TouchableOpacity onPress={() => console.log("hello")}>
          <Text
            style={{
              textAlign: "center",
              color: "#333",
              fontSize: 16,
              fontFamily: theme.fonts.TitilliumWebRegular
            }}
          >
            forgot password ?
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ padding: 15, backgroundColor: "#eee" }}>
        <TouchableOpacity onPress={() => navigation.replace("RegisterScreen")}>
          <Text
            style={{
              textAlign: "center",
              color: "green",
              fontSize: 18,
              fontFamily: theme.fonts.TitilliumWebRegular
            }}
          >
            click here to register
          </Text>
        </TouchableOpacity>
      </View>
    </React.Fragment>
  );
};

export default LoginForm;
