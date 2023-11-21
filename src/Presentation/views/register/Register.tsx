import React from "react";

import {
  View,
  Text,
  Image,
  TextInput,
  ToastAndroid,
  StyleSheet,
} from "react-native";
import LoginButton from "../../components/LoginButton";
import useViewModel from "../register/ViewModel";
import CustomTextInput from "../../components/CustomTextInput";


const RegisterScreen = () => {
  const { 
    name, 
    lastName, 
    email, 
    telephone,
    password, 
    confirm_password,
    onChange
   } =  useViewModel();

  return (
    <View style={styles.container}>
      <Image
        style={styles.imageBackground}
        source={require("../../../../assets/chef.jpg")}
      />
      <View style={styles.logoContainer}>
        <Image
          source={require("../../../../assets/user_image.png")}
          style={styles.logoImage}
        />
        <Text style={styles.logoText}>SELECIONA UNA IMAGEN</Text>
      </View>
      <View style={styles.form}>
        

          <CustomTextInput
          image={require("../../../../assets/user.png")}
          placeholder="Nombres"
          keyboardType="default"
          value={name}
          onChangeText={onChange}
          secureTextEntry={false}
          Property="name"
          />

          <CustomTextInput
          image={require("../../../../assets/my_user.png")}
          placeholder="Apellidos"
          keyboardType="default"
          value={lastName}
          onChangeText={onChange}
          secureTextEntry={false}
          Property="lastName"
          />

          <CustomTextInput
          image={require("../../../../assets/email.png")}
          placeholder="Correo electronico"
          keyboardType="email-address"
          value={email}
          onChangeText={onChange}
          secureTextEntry={false}
          Property="email"
          />

          <CustomTextInput
          image={require("../../../../assets/phone.png")}
          placeholder="Telefono"
          keyboardType="numeric"
          value={telephone}
          onChangeText={onChange}
          secureTextEntry={false}
          Property="telephone"
          />

          <CustomTextInput
          image={require("../../../../assets/password.png")}
          placeholder="Contraseña"
          keyboardType="numeric"
          value={password}
          onChangeText={onChange}
          secureTextEntry={true}
          Property="password"
          />

          <CustomTextInput
          image={require("../../../../assets/confirm_password.png")}
          placeholder="Confirmar Contraseña"
          keyboardType="default"
          value={confirm_password}
          onChangeText={onChange}
          secureTextEntry={true}
          Property="confirm_password"
          />

        <View style={{ marginTop: 30, marginLeft: 20, marginRight: 20 }}>
          <LoginButton
            text="REGISTRATE"
            onPress={() => ToastAndroid.show("Registro exitoso!!", 2000)}
          />
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
    height: "70%",
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
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
    top: "5%",
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

export default RegisterScreen;
