// import { getCookie, setCookie } from "../utils/cookie";
import Link from 'next/link';
import { FC, useState, ChangeEvent, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from '../utils/authContext';

import styles from '../styles/Authpage.module.css';

const SignUp: FC = () => {
  const Router = useRouter();
  const { login } = useContext(AuthContext);
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const token = document.cookie;
    if (token) Router.push('/home');
  }, [isLoggedIn]);

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const [fieldError, setFieldError] = useState({
    emailFieldError: '',
    passwordFieldError: '',
  });

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = async (e: any) => {
    e.preventDefault();
    const { email, password } = user;

    const result = await login(email, password);

    if (!result.isVerified) {
      alert('Email is not verified');
      // document.cookie = result.token;
    }

    document.cookie = result.token;
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={(e) => handleOnSubmit(e)}>
        <h3 className={styles.heading}>Login</h3>
        <div className={styles.inputWrapper}>
          <input
            className={`${styles.input} ${
              isError && fieldError ? styles.errorfield : ''
            } `}
            name="email"
            placeholder="email"
            value={user.email}
            autoComplete="off"
            onChange={(e) => handleOnChange(e)}
          />
          <p className={styles.fielderrormsg}>{fieldError.emailFieldError}</p>
        </div>
        <div className={styles.inputWrapper}>
          <input
            className={`${styles.input} ${
              isError && fieldError ? styles.errorfield : ''
            } `}
            autoComplete="off"
            name="password"
            type="password"
            placeholder="password"
            value={user.password}
            onChange={(e) => handleOnChange(e)}
          />
          <p className={styles.fielderrormsg}>
            {fieldError.passwordFieldError}
          </p>
        </div>
        <button className={styles.primary_btn}>Login</button>
        <div className={styles.errormsg}>{error}</div>
      </form>

      <div className={styles.secondary_btn}>
        <Link href="/">Sign Up</Link>
      </div>
    </div>
  );
};

export default SignUp;
