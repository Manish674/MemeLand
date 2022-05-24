import {
  Form,
  Container,
  Input,
  Button,
  Heading,
  LinkButton,
} from './auth.comp';
import React, { useState } from 'react';
import { useLoginMutation } from './authApi';
import { useRouter } from 'next/router';

const Login = () => {
  const router = useRouter();
  const [userDetails, setDetails] = useState({
    email: '',
    password: '',
  });

  const [login, result] = useLoginMutation();

  const handleOnChange = (e: any) => {
    setDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const { email, password } = userDetails;

    if (!email || !password) {
      return alert('Info incomplete');
    }

    const token = localStorage.getItem('accessToken');
    if (!token) return console.log('Token not found');

    const res: any = await login({ email, password, token });

    if (!res.data.success) return alert(res.data.message);
    localStorage.setItem('isAuth', 'true');
    router.push('/');
  };

  return (
    <Container>
      <Form onSubmit={(e) => handleSubmit(e)}>
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
        <Button onClick={(e) => handleSubmit(e)}>Login</Button>
        <LinkButton href={'/signup'}>don't have account ? </LinkButton>
      </Form>
    </Container>
  );
};

export default Login;
