import { StyleSheet } from "react-native";
import theme from "../../../libs/theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee"
  },
  infoWrapper: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
    backgroundColor: "skyblue"
  },
  infoHeading: {
    fontSize: 26,
    textAlign: "center",
    color: "#000",
    fontFamily: theme.fonts.TitilliumWebSemiBold
  },
  infoParagraph: {
    fontSize: 18,
    textAlign: "center",
    color: "#000",
    marginHorizontal: 20,
    marginTop: 30,
    fontFamily: theme.fonts.TitilliumWebRegular
  },
  formWrapper: {
    flex: 1,
    flexDirection: "column",
    margin: 30
  },
  inputWrapper: {
    marginBottom: 10,
    borderBottomWidth: 0
  },
  input: errors => {
    return {
      borderColor: errors ? "#e74c3c" : "black",
      marginHorizontal: 20,
      borderWidth: 1,
      borderRadius: 10,
      paddingLeft: 20,
      fontFamily: theme.fonts.TitilliumWebRegular
    };
  },
  submitButtonWrapper: {
    marginTop: 10,
    alignSelf: "center",
    borderBottomWidth: 0
  },
  submitButton: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: "#fff"
  },
  submitButtonDisabled: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: "#ddd"
  },
  submitButtonText: {
    textAlign: "center",
    fontFamily: theme.fonts.TitilliumWebSemiBold,
    color: "red"
  },
  submitButtonTextDisabled: {
    textAlign: "center",
    fontFamily: theme.fonts.TitilliumWebSemiBold,
    color: "#ccc"
  }
});
