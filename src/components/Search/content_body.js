import { Button, Form, Input, Item, Text, View } from "native-base";
import React from "react";
import Switch from "../shared/Switch";
import styles from "./styles";

class ContentBody extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: {
        name: null,
        city: null,
        gender: "Any",
        marital_status: "Any"
      }
    };
  }

  render() {
    const { filter } = this.state;

    return (
      <Form style={styles.formWrapper}>
        <Item style={styles.inputWrapper}>
          <Input
            onFocus={() => avoidKeyboardView(false)}
            placeholder="Name / Mobile"
            placeholderTextColor="#000"
            autoCorrect={false}
            value={filter.name}
            onChangeText={name =>
              this.setState({ filter: { ...filter, name } })
            }
            style={styles.input}
          />
        </Item>

        <Item style={styles.inputWrapper}>
          <Input
            onFocus={() => avoidKeyboardView(true)}
            placeholder="ગામ"
            placeholderTextColor="#000"
            autoCorrect={false}
            value={filter.city}
            onChangeText={city =>
              this.setState({ filter: { ...filter, city } })
            }
            style={styles.input}
          />
        </Item>

        <Item style={styles.inputWrapper}>
          <Input
            onFocus={() => avoidKeyboardView(true)}
            placeholder="મોસાડ"
            placeholderTextColor="#000"
            autoCorrect={false}
            value={filter.city}
            onChangeText={city =>
              this.setState({ filter: { ...filter, city } })
            }
            style={styles.input}
          />
        </Item>

        <View style={styles.buttonGroup}>
          <Item style={styles.buttonWrapper}>
            <Switch
              {...this.props}
              width={200}
              options={["Any", "Male", "Female"]}
              selected={filter.gender}
              onChange={gender =>
                this.setState({ filter: { ...filter, gender } })
              }
            />
          </Item>

          <Item style={styles.buttonWrapper}>
            <Switch
              {...this.props}
              width={200}
              options={["Any", "Married", "Single"]}
              selected={filter.marital_status}
              onChange={marital_status =>
                this.setState({ filter: { ...filter, marital_status } })
              }
            />
          </Item>

          <Item style={styles.submitButtonWrapper}>
            <Button
              rounded
              small
              style={styles.submitButton}
              onPress={() => checkVerification(props)}
            >
              <Text style={styles.submitButtonText}>APPLY</Text>
            </Button>
          </Item>
        </View>
      </Form>
    );
  }
}

export default ContentBody;
