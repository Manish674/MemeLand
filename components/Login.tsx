// import cookieCutter from "cookie-cutter";
// import Router from "next/router";
// import jwt_decode from "jwt-decode";
// import axios from '../utils/axios';
import axios from 'axios';
import Link from 'next/link';
import { FC, useState, ChangeEvent } from 'react';
import styles from '../styles/Authpage.module.css';

const SignUp: FC = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = async (e: any) => {
    e.preventDefault();
    const { email, password } = user;

    if (!email || !password) return console.log('pls provide valid details');

    // TODO work on the login functionality
    const data = axios({
      method: 'POST',
      url: 'https://localhost:4000/api/v1/auth/login',
      data: {
        email,
        password,
      },
    })
      .catch((err: any) => console.log(err))
      .then((res) => console.log(res));
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={(e) => handleOnSubmit(e)}>
        <h3 className={styles.heading}>Login</h3>
        <input
          className={styles.input}
          name="email"
          placeholder="email"
          value={user.email}
          autoComplete="false"
          onChange={(e) => handleOnChange(e)}
        />
        <input
          className={styles.input}
          autoComplete="false"
          name="password"
          type="password"
          placeholder="password"
          value={user.password}
          onChange={(e) => handleOnChange(e)}
        />
        <button className={styles.primary_btn}>Login</button>
      </form>
      <div className={styles.secondary_btn}>
        <Link href="/">Sign Up</Link>
      </div>
    </div>
  );
};

export default SignUp;
