import { FC, useState } from "react";
import styles from "../styles/Authpage.module.css";
import Link from "next/link";

const SignUp: FC = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    await fetch("https://localhost:8080/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user,
      }),
    });

    setUser({
      username: "",
      email: "",
      password: "",
      passwordConfirm: "",
    });
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
          onChange={(e) => handleOnChange(e)}
        />
        <input
          className={styles.input}
          name="passwordConfirm"
          placeholder="confirm password"
          value={user.passwordConfirm}
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
