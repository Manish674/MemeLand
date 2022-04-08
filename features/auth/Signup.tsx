import React from 'react';
import styles from '../../styles/Authpage.module.css';
import { FC, useState } from 'react';
import { useRegisterMutation } from './authApi';

const SignUp: FC = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const [register, result] = useRegisterMutation();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const { username, email, password } = user;
    const result = await register({
      username,
      email,
      password,
      dateOfBirth: '02-03-1919',
    });
    console.log(result);
    console.log('Hook result', result);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={(e) => handleOnSubmit(e)}>
        <h3 className={styles.heading}>Sign Up</h3>
        <div className={styles.inputWrapper}>
          <input
            className={`${styles.input}`}
            name="username"
            placeholder="username"
            value={user.username}
            onChange={(e) => handleOnChange(e)}
            autoComplete="off"
          />
        </div>
        <div className={styles.inputWrapper}>
          <input
            className={`${styles.input}`}
            name="email"
            placeholder="email"
            value={user.email}
            onChange={(e) => handleOnChange(e)}
            autoComplete="off"
          />
        </div>
        <div className={styles.inputWrapper}>
          <input
            className={`${styles.input}  `}
            name="password"
            placeholder="password"
            value={user.password}
            type="password"
            onChange={(e) => handleOnChange(e)}
            autoComplete="off"
          />
        </div>
        <div className={styles.inputWrapper}>
          <input
            className={`${styles.input}
            } `}
            name="passwordConfirm"
            placeholder="confirm password"
            value={user.passwordConfirm}
            type="password"
            onChange={(e) => handleOnChange(e)}
            autoComplete="off"
          />
        </div>
        <button className={styles.primary_btn}>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
