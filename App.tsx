// import loginButton from './src/components/loginButton';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import LoginButton from "./src/components/LoginButton";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageBackground}
        source={require("./assets/chef.jpg")}
      />

      <View style={styles.logoContainer}>
        <Image source={require("./assets/logo.png")} style={styles.logoImage} />
        <Text style={styles.logoText}>FOOD APP</Text>
      </View>

      <View style={styles.form}>

        <View style={ styles.formInput } >
      <Image
      style={ styles.formIcon }
      source={ require('./assets/email.png') }
      />
      <TextInput
      style={ styles.formTextInput }
      placeholder="Correo electronico"
      keyboardType="email-address"
      ></TextInput>
        </View>

        <View style={ styles.formInput } >
      <Image
      style={ styles.formIcon }
      source={ require('./assets/password.png') }
      />
      <TextInput
      style={ styles.formTextInput }
      placeholder="Contraseña"
      keyboardType="default"
      secureTextEntry={ true }    
      ></TextInput>
        </View>

      <View style={ {marginTop:30, marginLeft:20, marginRight:20} } >
      <LoginButton
      
      />
      </View>
      <View style={ styles.formRegister } >
        <Text>No tenes cuenta?</Text>
        <Text style={ styles.formRegisterText } >Registrate</Text>
      </View>
      </View>

    </View>
  );
}

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
    color: "orange",
  },
  formTextInput:{
    flex:1,
    borderBottomWidth: 1,
    borderBottomColor:'#AAAAAA'
  },
  formInput:{
    flexDirection: 'row',
    marginTop:40,
    paddingLeft:20,
    paddingRight:20,

  },
  formIcon:{
    width:25,
    height:25,
    marginRight:15
  },
  formRegister:{
    flexDirection:'row',
    justifyContent: 'center',
    marginTop:20
  },
  formRegisterText:{
    fontStyle:'italic',
    color:'orange',
    borderBottomWidth:1,
    borderBottomColor: 'orange',
    fontWeight:'bold',
    marginLeft:10,
    
  }
});
