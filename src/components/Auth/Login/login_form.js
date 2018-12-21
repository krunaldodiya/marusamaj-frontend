import { Button, Form, Input, Item, Text, View } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";
import theme from "../../../libs/theme";
import styles from "./styles";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: null,
      password: null
    };
  }

  render() {
    const { guest, navigation } = this.props;
    const { loading, errors } = guest;
    const { username, password } = this.state;

    return (
      <React.Fragment>
        <Form style={styles.formWrapper}>
          <Item style={styles.inputWrapper}>
            <Input
              placeholder={errors ? errors.errors.username[0] : "Username"}
              placeholderTextColor={errors ? "#e74c3c" : "gray"}
              keyboardType="default"
              value={username}
              onChangeText={number => this.setState({ username: number })}
              style={styles.input(errors)}
            />
          </Item>

          <Item style={styles.inputWrapper}>
            <Input
              secureTextEntry
              placeholder={errors ? errors.errors.password[0] : "Password"}
              placeholderTextColor={errors ? "#e74c3c" : "gray"}
              keyboardType="default"
              maxLength={10}
              value={password}
              onChangeText={number => this.setState({ password: number })}
              style={styles.input(errors)}
            />
          </Item>

          <Item style={[styles.submitButtonWrapper, { marginTop: 20 }]}>
            <Button
              rounded
              small
              disabled={loading}
              style={styles.submitButton}
              onPress={() => console.log({ username, password })}
            >
              <Text style={styles.submitButtonText}>LOGIN</Text>
            </Button>
          </Item>
        </Form>

        <View style={{ padding: 15 }}>
          <TouchableOpacity
            onPress={() => navigation.replace("RegisterScreen")}
          >
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

        <View style={{ padding: 15, backgroundColor: "#7EF9FF" }}>
          <TouchableOpacity
            onPress={() => navigation.replace("RegisterScreen")}
          >
            <Text
              style={{
                textAlign: "center",
                color: "black",
                fontSize: 18,
                fontFamily: theme.fonts.TitilliumWebRegular
              }}
            >
              REGISTER
            </Text>
          </TouchableOpacity>
        </View>
      </React.Fragment>
    );
  }
}

export default LoginForm;
