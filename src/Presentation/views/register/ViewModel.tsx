import React, { useState } from "react";

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

  return {
    ...values,
    onChange,
  };
};

export default RegisterViewModel;
