// import cookieCutter from "cookie-cutter";
// import Router from "next/router";
// import jwt_decode from "jwt-decode";
import axios from '../utils/axios';
import Link from 'next/link';
import { FC, useState, ChangeEvent, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Authpage.module.css';

const SignUp: FC = () => {
  const Router = useRouter();

  useEffect(() => {
    if (document.cookie) {
      Router.push('/home');
    }
  }, []);

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

    console.log(document.cookie);
    // TODO work on the login functionality
    try {
      const { data } = await axios({
        method: 'POST',
        url: '/auth/login',
        data: {
          email,
          password,
        },
      });

      console.log(data);
      // if (data.isVerified) {
      //   document.cookie = data.token;
      // }
    } catch (e: any) {
      alert(e.message);
    }
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
