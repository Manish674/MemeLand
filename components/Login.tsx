import cookieCutter from "cookie-cutter";
import Router from "next/router";
import jwt_decode from "jwt-decode";
import Link from "next/link";
import { FC, useState, ChangeEvent, SyntheticEvent, useEffect } from "react";
import styles from "../styles/Authpage.module.css";

interface cUser {
  username: string,
  email: string,
  iat: number;
  exp: number
} 

const SignUp: FC = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // useEffect(() => {
  //   if (cookieCutter.get('username')) {
  //     Router.push('/home')
  //   }
  // }, [])

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const uri = "http://localhost:8080/api/v1/login"

    const response = await fetch(uri, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user,
      }),
    }).then((r) => r.json())

    const decoded:cUser = jwt_decode(response.token);
    console.log(decoded);

    // cookieCutter.set('username', decoded.username);
    // cookieCutter.set('email', decoded.email);

    setUser({
      email: "",
      password: ""  
    })
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
          onChange={(e) => handleOnChange(e)}
        />
        <input
          className={styles.input}
          name="password"
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
