// import cookieCutter from "cookie-cutter";
// import Router from "next/router";
import axios from '../utils/axios';
import { FC, useState, useEffect } from 'react';
import styles from '../styles/Authpage.module.css';
import Link from 'next/link';

const SignUp: FC = (props) => {
  console.log('this is from react component', props);
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  useEffect(() => {}, []);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const { email, username, password, passwordConfirm } = user;

    if (!username || !email) return console.log('pls provide with all details');
    if (password !== passwordConfirm)
      return console.log('passwords are not same');

    try {
      const response: any = await axios({
        method: 'POST',
        url: '/auth/register',
        data: {
          username,
          email,
          password,
        },
      });

      const { data } = response;
      document.cookie = data.token;
    } catch (e) {
      console.log('error happened');
      console.log(e);
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={(e) => handleOnSubmit(e)}>
        <h3 className={styles.heading}>Sign Up</h3>
        <input
          className={styles.input}
          name="username"
          placeholder="username"
          value={user.username}
          onChange={(e) => handleOnChange(e)}
        />
        <input
          className={styles.input}
          name="email"
          placeholder="email"
          value={user.email}
          onChange={(e) => handleOnChange(e)}
        />
        <input
          className={styles.input}
          name="password"
          placeholder="password"
          value={user.password}
          type="password"
          onChange={(e) => handleOnChange(e)}
        />
        <input
          className={styles.input}
          name="passwordConfirm"
          placeholder="confirm password"
          value={user.passwordConfirm}
          type="password"
          onChange={(e) => handleOnChange(e)}
        />
        <button className={styles.primary_btn}>Sign Up</button>
      </form>
      <div className={styles.secondary_btn}>
        <Link href="/login" passHref={true}>
          Login
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
