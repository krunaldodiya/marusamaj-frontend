import { StyleSheet } from "react-native";
import theme from "../../../libs/theme";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#d80402"
  },

  name: {
    justifyContent: "center",
    color: "white",
    marginLeft: 15,
    fontSize: 18,
    fontFamily: theme.fonts.TitilliumWebSemiBold
  }
});
