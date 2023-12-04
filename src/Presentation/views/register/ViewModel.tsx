import React, { useState } from "react";
import { ApiDelivery } from "../../../Data/sources/remote/api/ApiDelivery";

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
   
    const response = await ApiDelivery.post('/users/create', values)
    console.log('RESPUESTA: ', JSON.stringify(response))

  }

  return {
    ...values,
    onChange,
    register
  };
};

export default RegisterViewModel;
