import React, { useState } from "react";
import { LoginAuthUseCase } from "../../../Domain/useCases/auth/LoginAuth";

const HomeViewModel = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const onChange = (property: string, value: any) => {
    setValues({ ...values, [property]: value });
  };

  const login = async () => {
    if (isValidForm()) {
      const resp = await LoginAuthUseCase(values.email, values.password);
      console.log(JSON.stringify(resp));
    }
  };

  const isValidForm = (): boolean => {
    if (values.email == "") {
      setErrorMessage("Agregue un correo electronico");
      return false;
    }
    if (values.password == "") {
      setErrorMessage("Agregue un password");
      return false;
    }
    return true;
  };

  return {
    ...values,
    onChange,
    login,
    isValidForm,
    errorMessage,
  };
};

export default HomeViewModel;
