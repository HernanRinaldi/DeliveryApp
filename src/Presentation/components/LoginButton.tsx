import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { COLORS } from "../theme/globals";

interface PropsButton {
  text: string;
  onPress: () => void;
}

const LoginButton = ({ text, onPress }: PropsButton) => {
  return (
    <TouchableOpacity onPress={() => onPress()} style={styles.loginButton}>
      <Text style={styles.textButton}> {text} </Text>
    </TouchableOpacity>
  );
};

export default LoginButton;

const styles = StyleSheet.create({
  loginButton: {
    width: "100%",
    height: 50,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  textButton: {
    color: "white",
    fontWeight: "bold",
  },
});
