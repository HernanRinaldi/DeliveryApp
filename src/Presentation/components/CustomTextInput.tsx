import React from 'react'
import {
    KeyboardType,
    StyleSheet,
    TextInput,
    View,
    Image
  } from "react-native";


interface PropsInput {
    image: any,
    placeholder: string,
    keyboardType: KeyboardType,
    value: string,
    Property: string,
    onChangeText: (Property: string, value: any)=> void,
    secureTextEntry?: boolean
}

const CustomTextInput = ( {
     placeholder,
     keyboardType,
     value,
     onChangeText,
     secureTextEntry= false,
    image,
    Property
    }: PropsInput ) => {
  return (
   
    <View style={ styles.formInput } >
    <Image
    style={ styles.formIcon }
    source={ image }
    />

    <TextInput
    style={ styles.formTextInput }
    placeholder={placeholder}
    keyboardType={ keyboardType }
    value={ value }
    onChangeText={ text => onChangeText( Property, text ) }
    secureTextEntry={secureTextEntry}
    ></TextInput>
      </View>
   
  )
}

export default CustomTextInput;


const styles = StyleSheet.create({
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
})
