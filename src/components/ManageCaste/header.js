import { Text, View } from "native-base";
import React from "react";
import styles from "./styles";

const TermsHeader = () => (
  <View style={styles.termsWrapper}>
    <View>
      <Text style={styles.termsHeader}>SELECT YOUR CASTE</Text>
    </View>
    <View>
      <Text style={styles.termsHeader}>OK</Text>
    </View>
  </View>
);

export default TermsHeader;
