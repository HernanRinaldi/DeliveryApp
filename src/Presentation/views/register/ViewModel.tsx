import  { useState } from "react";
import { RegisterAuthUseCase } from "../../../Domain/useCases/auth/RegisterAuth";

const RegisterViewModel = () => {
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

  return {
    ...values,
    onChange,
    register
  };
};

export default RegisterViewModel;
