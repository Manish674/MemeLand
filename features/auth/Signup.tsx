import React from 'react';
import { FC, useState } from 'react';
import { useRegisterMutation } from './authApi';
import { Button, Container, Heading, Input } from './auth.comp';

const SignUp: FC = () => {
  const [user, setUser] = useState({
    username: 'manish',
    email: 'manishchoudhary4905@gmail.com',
    password: 'manish@495',
    confirmPassword: '',
  });

  const [register, result] = useRegisterMutation();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = async (e: React.SyntheticEvent) => {
    const { username, email, password, confirmPassword } = user;

    if (!username || !email || !password || !confirmPassword) {
      // make every border red
      console.log('shit head provide all the valid details');
    }

    if (password !== confirmPassword) {
      // make the border red of the input which is invalid
      console.log("Password don't match idiot they're not same");
    }

    const res = await register({
      username,
      email,
      password,
      dateOfBirth: '2005-09-01',
    });
    localStorage.setItem('refreshToken', res.data.refreshToken);
    localStorage.setItem('accessToken', res.data.accessToken);
  };

  return (
    <Container>
      <Heading>Sign Up</Heading>
      <Input
        name="username"
        onChange={(e) => handleOnChange(e)}
        placeholder="username"
      />
      <Input
        name="email"
        onChange={(e) => handleOnChange(e)}
        placeholder="email"
        typeof="email"
      />
      <Input
        name="password"
        onChange={(e) => handleOnChange(e)}
        placeholder="password"
        typeof="password"
      />
      <Input
        name="confirmPassword"
        onChange={(e) => handleOnChange(e)}
        placeholder="confirm password"
        typeof="password"
      />
      <Button onSubmit={(e) => handleOnSubmit(e)}>Signup</Button>
    </Container>
  );
};

export default SignUp;
