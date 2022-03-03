import React from 'react';
import axios from '../utils/axios';
import { FC, useState } from 'react';
import styles from '../styles/Authpage.module.css';
import Link from 'next/link';

const SignUp: FC = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const [isError, setIsError] = useState(false);

  const [fieldError, setFieldError] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const { email, username, password, passwordConfirm } = user;

    // if (!username || !email) return console.log('pls provide with all details');
    if (!username) {
      setIsError(true);
      setFieldError({
        ...fieldError,
        username: 'what we gonna call you, shithead ??? ',
      });
    }
    if (!email) {
      setIsError(true);
      setFieldError({
        ...fieldError,
        email: 'Goddamn it. You have to provide all the information',
      });
    }
    if (!password) {
      setIsError(true);
      setFieldError({
        ...fieldError,
        email: "You can't login without password, dumbass!",
      });
    }
    if (!passwordConfirm) {
      setIsError(true);
      setFieldError({
        ...fieldError,
        passwordConfirm: 'provide this field you  shit',
      });
    }

    if (password !== passwordConfirm) {
      setIsError(true);
      setFieldError({
        ...fieldError,
        passwordConfirm: 'Now you gonna login with two password ??',
      });
    }

    if (isError) return;

    try {
      const { data } = await axios({
        method: 'POST',
        url: '/auth/register',
        data: {
          username,
          email,
          password,
        },
      });
    } catch (e) {
      console.log('error happened');
      console.log(e);
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={(e) => handleOnSubmit(e)}>
        <h3 className={styles.heading}>Sign Up</h3>
        <div className={styles.inputWrapper}>
          <input
            className={`${styles.input} ${
              isError && fieldError ? styles.errorfield : ''
            } `}
            name="username"
            placeholder="username"
            value={user.username}
            onChange={(e) => handleOnChange(e)}
            autoComplete="off"
          />
          <p className={styles.fielderrormsg}>{fieldError.username}</p>
        </div>
        <div className={styles.inputWrapper}>
          <input
            className={`${styles.input} ${
              isError && fieldError ? styles.errorfield : ''
            } `}
            name="email"
            placeholder="email"
            value={user.email}
            onChange={(e) => handleOnChange(e)}
            autoComplete="off"
          />

          <p className={styles.fielderrormsg}>{fieldError.email}</p>
        </div>
        <div className={styles.inputWrapper}>
          <input
            className={`${styles.input} ${
              isError && fieldError ? styles.errorfield : ''
            } `}
            name="password"
            placeholder="password"
            value={user.password}
            type="password"
            onChange={(e) => handleOnChange(e)}
            autoComplete="off"
          />

          <p className={styles.fielderrormsg}>{fieldError.password}</p>
        </div>
        <div className={styles.inputWrapper}>
          <input
            className={`${styles.input} ${
              isError && fieldError ? styles.errorfield : ''
            } `}
            name="passwordConfirm"
            placeholder="confirm password"
            value={user.passwordConfirm}
            type="password"
            onChange={(e) => handleOnChange(e)}
            autoComplete="off"
          />
          <p className={styles.fielderrormsg}>{fieldError.passwordConfirm}</p>
        </div>
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
