import axios from '../utils/axios';
import Link from 'next/link';
import { FC, useState, ChangeEvent, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Authpage.module.css';

const SignUp: FC = () => {
  const Router = useRouter();
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    if (document.cookie) {
      Router.push('/home');
    }
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

    // if (!email || !password) return console.log('pls provide valid details');
    if (!email) {
      setIsError(true);
      setFieldError({
        ...fieldError,
        emailFieldError: 'email field cannot be empty',
      });
    }

    if (!password) {
      setIsError(true);
      setFieldError({
        ...fieldError,
        passwordFieldError: 'password field cannot be empty',
      });
    }

    setIsError(false);
    setFieldError({
      emailFieldError: '',
      passwordFieldError: '',
    });

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

      if (!data.success) {
        setIsError(true);
        setError(data.message);
        return;
      }

      if (data.isVerified) {
        document.cookie = data.token;
        setisLoggedIn(true);
      }
    } catch (e: any) {
      alert(e.message);
    }
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
