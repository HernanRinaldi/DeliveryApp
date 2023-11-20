import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import LoginButton from "../../components/LoginButton";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../../../App";
import { StackNavigationProp } from "@react-navigation/stack";
import { COLORS } from "../../theme/globals";
import useViewModel from "./ViewModel";
import CustomTextInput from "../../components/CustomTextInput";

const HomeScreen = () => {
  const { email, password, onChange } = useViewModel();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Image
        style={styles.imageBackground}
        source={require("../../../../assets/chef.jpg")}
      />

      <View style={styles.logoContainer}>
        <Image
          source={require("../../../../assets/logo.png")}
          style={styles.logoImage}
        />
        <Text style={styles.logoText}>TUS COMIDAS</Text>
      </View>

      <View style={styles.form}>
        <CustomTextInput
          image={require("../../../../assets/email.png")}
          placeholder="Correo electronico"
          value={email}
          keyboardType="email-address"
          Property="email"
          onChangeText={onChange}
          secureTextEntry={false}
        />

        <CustomTextInput
          image={require("../../../../assets/password.png")}
          placeholder="Password"
          value={password}
          keyboardType="default"
          Property="password"
          onChangeText={onChange}
          secureTextEntry={true}
        />

        <View style={{ marginTop: 30, marginLeft: 20, marginRight: 20 }}>
          <LoginButton
            text="ENTRAR"
            onPress={() => console.log(email, password)}
          />
        </View>
        <View style={styles.formRegister}>
          <Text>No tenes cuenta?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("RegisterScreen")}
          >
            <Text style={styles.formRegisterText}>Registrate</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

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

export default HomeScreen;
