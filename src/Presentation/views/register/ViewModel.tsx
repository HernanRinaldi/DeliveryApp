import { useState } from "react";
import { RegisterAuthUseCase } from "../../../Domain/useCases/auth/RegisterAuth";

const RegisterViewModel = () => {
  const [validateForm, setValidateForm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
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

  const register = async () => {
    if (isValidForm()) {
      const response = await RegisterAuthUseCase(values);
      console.log(JSON.stringify(response));
    }
  };

  const isValidForm = (): boolean => {
    if (values.name === "") {
      setErrorMessage("Ingresa tu nombre");
      return false;
    }
    if (values.lastName === "") {
      setErrorMessage("Ingresa tu apellido");
      return false;
    }
    if (values.email === "") {
      setErrorMessage("Ingresa tu correo electronico");
      return false;
    }
    if (values.telephone === "") {
      setErrorMessage("Ingresa tu telefono");
      return false;
    }
    if (values.password === "") {
      setErrorMessage("Ingresa tu contraseña");
      return false;
    }
    if (values.confirm_password === "") {
      setErrorMessage("Confirma tu contraseña");
      return false;
    }
    if (values.password !== values.confirm_password) {
      setErrorMessage("Confirma tu contraseña correctamente");
      return false;
    }

    return true;
  };

  return {
    ...values,
    onChange,
    register,
    isValidForm,
    errorMessage,
  };
};

export default RegisterViewModel;
