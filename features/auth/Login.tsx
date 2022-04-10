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
    console.log(userDetails);
  };

  const handleSubmit = async () => {
    const { email, password } = userDetails;
    const token = localStorage.getItem('accessToken');
    if (!token) return console.log('Token not found');
    const res = await login({ email, password, token });
    console.log(res);
  };

  return (
    <div>
      <input
        name="email"
        onChange={(e) => handleOnChange(e)}
        placeholder="email"
      />
      <input
        name="password"
        onChange={(e) => handleOnChange(e)}
        placeholder="password"
        typeof="password"
      />
      <button onClick={() => handleSubmit()}>Submit</button>
    </div>
  );
};

export default Login;
