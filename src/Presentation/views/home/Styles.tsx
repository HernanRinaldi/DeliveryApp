/*==================== STYLES =================================*/
import { StyleSheet } from "react-native";
import { COLORS } from "../../theme/globals";

 const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
    imageBackground: {
      width: "100%",
      height: "100%",
      bottom: "30%",
    },
    form: {
      width: "100%",
      height: "40%",
      backgroundColor: "white",
      position: "absolute",
      bottom: 0,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
    },
    logoContainer: {
      position: "absolute",
      marginLeft: "10%",
      marginTop: "25%",
    },
    logoImage: {
      width: 100,
      height: 100,
      alignSelf: "center",
    },
    logoText: {
      alignSelf: "center",
      top: 10,
      color: COLORS.text,
    },
    formRegister: {
      flexDirection: "row",
      justifyContent: "center",
      marginTop: 20,
    },
    formRegisterText: {
      fontStyle: "italic",
      color: "orange",
      borderBottomWidth: 1,
      borderBottomColor: "orange",
      fontWeight: "bold",
      marginLeft: 10,
    },
  });
  export default styles;