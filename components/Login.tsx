import Link from "next/link";
import { FC, useState, ChangeEvent, SyntheticEvent } from "react";
import styles from "../styles/Authpage.module.css";

const SignUp: FC = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
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
