import {
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Linking,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageBackground}
        source={require("./assets/chef.jpg")}
      />
      <SafeAreaView style={styles.safeAreaForm}>
        <View style={ styles.containerTextInput } >
          <Image
          style={ styles.imageInput }
          source={ require("./assets/user.png") } />
          <TextInput style={ styles.textInput }
          placeholder="Correo electronico"
          ></TextInput>
        </View>

        <View style={ styles.containerTextInput } >
          <Image
          style={ styles.imageInput }
          source={ require("./assets/email.png") } />
          <TextInput style={ styles.textInput }
          placeholder="Contraseña"
          ></TextInput>
        </View>

        {/* <Button style={styles.bottonForm} 
        >Entrar</Button> */}

        <View>
          <Text>No tenes cue</Text>
          {/* <Linking></Linking> */}
        </View>
      </SafeAreaView>
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
    height: "70%",
  },
  safeAreaForm: {
    backgroundColor: "#fff",
    width:'80%',
    height:'100%'
  },
  imageInput:{
    width: 25,
    height: 25,
    marginLeft:20,
    marginTop:20,
    marginBottom:20
  },
  containerTextInput:{
    display:'flex',
    flexDirection:'row',
    marginTop:5
  },
  textInput:{
    height: 40,
    width:'95%',
    margin: 8,
    borderBottomWidth: 1,
    padding: 10,
    
  },
  bottonForm:{

  }
});
