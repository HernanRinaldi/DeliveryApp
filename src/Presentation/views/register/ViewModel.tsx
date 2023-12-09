import  { useState } from "react";
import { RegisterAuthUseCase } from "../../../Domain/useCases/auth/RegisterAuth";

const RegisterViewModel = () => {
  const [validateForm, setValidateForm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [values, setValues] = useState({
    name: "",
    lastName: "",
    email: "",
    telephone: "",
    password: "",
    confirm_password: "",
  });

  const onChange = (property: string, value: any) => {
    setValues({ ...values, [property]: value });
  };

  const register = async( )=>{
   
    const response = await RegisterAuthUseCase(values);
    console.log('RESPONSE: ', JSON.stringify(response));
   
  }

  const isValidForm = ():boolean => {
    if( values.name === '' ){
      setErrorMessage('Ingresa tu nombre');
    }
    if( values.lastName === '' ){
      setErrorMessage('Ingresa tu apellido');
    }
    if( values.email === '' ){
      setErrorMessage('Ingresa tu correo electronico');
    }
    if( values.telephone === '' ){
      setErrorMessage('Ingresa tu telefono');
    }
    if( values.password === '' ){
      setErrorMessage('Ingresa tu contraseña');
    }
    if( values.confirm_password === '' ){
      setErrorMessage('Confirma tu contraseña');
    }
    if( values.password !== values.confirm_password ){
      setErrorMessage('Confirma tu contraseña correctamente');
    }
    
    return true;
  }

  return {
    ...values,
    onChange,
    register,
    isValidForm,
    errorMessage
  };
};

export default RegisterViewModel;
