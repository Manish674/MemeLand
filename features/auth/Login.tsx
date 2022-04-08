import React, { useState } from 'react';
import { useLoginMutation } from './authApi';

const Login = () => {
  const [userDetails, setDetails] = useState({
    email: '',
    password: '',
  });

  const [login, result] = useLoginMutation();

  const handleOnChange = (e: any) => {
    setDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    const { email, password } = userDetails;
    const token = localStorage.getItem('_t');
    if (token) login({ email, password, token });
  };

  return (
    <div>
      <input
        name="email"
        onChange={(e) => handleOnChange(e)}
        placeholder="email"
      />
      <input placeholder="password" typeof="password" />
      <button onClick={(e) => handleSubmit(e)}>Submit</button>
    </div>
  );
};

export default Login;
