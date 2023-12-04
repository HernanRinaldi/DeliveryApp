/*============================ STYLES =============================*/

import { StyleSheet } from "react-native";

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
      height: "70%",
      backgroundColor: "white",
      position: "absolute",
      bottom: 40,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
    },
    formTextInput: {
      flex: 1,
      borderBottomWidth: 1,
      borderBottomColor: "#AAAAAA",
    },
    formInput: {
      flexDirection: "row",
      marginTop: 40,
      paddingLeft: 20,
      paddingRight: 20,
      marginBottom: -7,
    },
    formIcon: {
      width: 25,
      height: 25,
      marginRight: 15,
    },
    formRegister: {
      flexDirection: "row",
      justifyContent: "center",
      marginTop: 20,
    },
    logoContainer: {
      position: "absolute",
      alignSelf: "center",
      top: 15,
      marginBottom: 10,
    },
    logoImage: {
      width: 100,
      height: 100,
      alignSelf: "center",
    },
    logoText: {
      alignSelf: "center",
      top: 10,
      color: "white",
    },
  });

  export default styles;