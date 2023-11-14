import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const LoginButton = () => {
  return (
    <TouchableOpacity onPress={() => {}} style={styles.loginButton}>
      <Text style={styles.textButton}>ENTRAR</Text>
    </TouchableOpacity>
  );
};

export default LoginButton;

const styles = StyleSheet.create({
  loginButton: {
    width: "100%",
    height: 50,
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  textButton: {
    color: "white",
    fontWeight: "bold",
  },
});
