import React from "react";
import { Image, Text, View } from "react-native";
import LoginButton from "../../components/LoginButton";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../../../App";
import { StackNavigationProp } from "@react-navigation/stack";
import useViewModel from "./ViewModel";
import CustomTextInput from "../../components/CustomTextInput";
import styles from './Styles'

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



export default HomeScreen;
