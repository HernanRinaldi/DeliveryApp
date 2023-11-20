import React from 'react'
import {
    KeyboardType,
    StyleSheet,
    TextInput,
  } from "react-native";


interface PropsInput {
    placeholder: string,
    keyboardType: KeyboardType,
    value: string,
    onChange: (Property: string, value: any)=> void,
    secureTextEntry?: boolean
}

const CustomTextInput = ( {
     placeholder,
     keyboardType,
     value,
     onChange,
     secureTextEntry 
    }: PropsInput ) => {
  return (
   
    <TextInput
    style={ styles.formTextInput }
    placeholder= { placeholder }
    keyboardType= { keyboardType }
    value={ value }
    onChangeText={ text => onChange( 'email', text ) }
    secureTextEntry= { false }
    ></TextInput>
   
  )
}

export default CustomTextInput;


const styles = StyleSheet.create({
    formTextInput:{
        flex:1,
        borderBottomWidth: 1,
        borderBottomColor:'#AAAAAA'
      },

})
