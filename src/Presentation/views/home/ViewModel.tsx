import React, { useState } from 'react'

const HomeViewModel = () => {

const [Values, setValues] = useState({ 
  email:'',
  password:''
 });

const onChange = (  ) => {

}


  return {
    ...Values,
    onChange
  }
}

export default HomeViewModel;
