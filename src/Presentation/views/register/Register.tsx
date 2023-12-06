import React from "react";

import {
  View,
  Text,
  Image,
  ScrollView
} from "react-native";
import LoginButton from "../../components/LoginButton";
import useViewModel from "../register/ViewModel";
import CustomTextInput from "../../components/CustomTextInput";
import styles from "./Styles";
import Register from "../register/ViewModel";

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
      <ScrollView>
        

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
            onPress={() => Register()}
          />
        </View>
      </ScrollView>
      </View>
    </View>
  );
};

export default RegisterScreen;
