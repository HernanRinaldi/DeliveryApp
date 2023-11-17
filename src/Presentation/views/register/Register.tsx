import React, { useState } from "react";

import {
  View,
  Text,
  Image,
  TextInput,
  ToastAndroid,
  StyleSheet,
} from "react-native";
import LoginButton from "../../components/LoginButton";

const RegisterScreen = () => {

const [input, setinput] = useState({
  name:'',
  lastName:'',
  email:'',
  telephone:'',
  password:'',
  confirm_password:'',
})

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
        <View style={styles.formInput}>
          <Image
            style={styles.formIcon}
            source={require("../../../../assets/user.png")}
          />
          <TextInput
            style={styles.formTextInput}
            placeholder="Nombres"
            keyboardType="email-address"
            value={ input.name }
          ></TextInput>
        </View>

        <View style={styles.formInput}>
          <Image
            style={styles.formIcon}
            source={require("../../../../assets/my_user.png")}
          />
          <TextInput
            style={styles.formTextInput}
            placeholder="Apellidos"
            keyboardType="default"
            value={ input.lastName }
          ></TextInput>
        </View>
        <View style={styles.formInput}>
          <Image
            style={styles.formIcon}
            source={require("../../../../assets/email.png")}
          />
          <TextInput
            style={styles.formTextInput}
            placeholder="Correo electronico"
            keyboardType="email-address"
            value={ input.email }
          ></TextInput>
        </View>

        <View style={styles.formInput}>
          <Image
            style={styles.formIcon}
            source={require("../../../../assets/phone.png")}
          />
          <TextInput
            style={styles.formTextInput}
            placeholder="Telefono"
            keyboardType="numeric"
            value={ input.telephone }
          ></TextInput>
        </View>
        <View style={styles.formInput}>
          <Image
            style={styles.formIcon}
            source={require("../../../../assets/password.png")}
          />
          <TextInput
            style={styles.formTextInput}
            placeholder="Contraseña"
            secureTextEntry={true}
            value={ input.password }
          ></TextInput>
        </View>

        <View style={styles.formInput}>
          <Image
            style={styles.formIcon}
            source={require("../../../../assets/confirm_password.png")}
          />
          <TextInput
            style={styles.formTextInput}
            placeholder="Confirmar Contraseña"
            keyboardType="default"
            secureTextEntry={true}
            value={ input.confirm_password }
          ></TextInput>
        </View>
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
    marginBottom:-7
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
