import React from 'react';
import type { NextPage } from 'next';
// import headerImg from '../public/headerImg.png';
// import styles from '../styles/Home.module.css';
// import Login from '../components/Login';
// import headerImgLGScreen from '../public/headerImgLGScreen.png';
// import titleImg from '../public/title.png';
import AuthLayout from '../components/AuthLayout';
import Login from '../features/auth/Login';

const LoginPage: NextPage = () => {
  return (
    <AuthLayout>
      <Login />
    </AuthLayout>
  );
};

export default LoginPage;
