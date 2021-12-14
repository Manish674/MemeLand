import type { NextPage } from "next";
import headerImg from "../public/headerImg.png";
import styles from "../styles/Home.module.css";
import SignUp from "../components/SignUp";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.img_wrapper}>
        <img
          className={styles.img}
          src={headerImg.src}
          alt="header.png"
          width="100"
        />
      </div>
      <SignUp />
    </div>
  );
};

export default Home;
