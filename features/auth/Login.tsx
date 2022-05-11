import { Container, Input, Button, Heading, LinkButton } from './auth.comp';
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
    <Container>
      <Heading>Login</Heading>
      <Input
        name="email"
        onChange={(e) => handleOnChange(e)}
        placeholder="email"
      />
      <Input
        name="password"
        onChange={(e) => handleOnChange(e)}
        placeholder="password"
        typeof="password"
      />
      <Button onClick={() => handleSubmit()}>Login</Button>
      <LinkButton href={'/signup'}>don't have account ? </LinkButton>
    </Container>
  );
};

export default Login;
