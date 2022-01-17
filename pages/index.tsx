import Router from "next/router";
import type { NextPage } from 'next';
import headerImgLGScreen from '../public/headerImgLGScreen.png';
import headerImg from '../public/headerImg.png';
import titleImg from '../public/title.png';
import styles from '../styles/Home.module.css';
import SignUp from '../components/SignUp';
import { useEffect } from 'react';

//TODO make a better approach for jwt token

const Home: NextPage = (props: any) => {
  useEffect(() => {
    if (props.isLoggedIn)  Router.push('/home')
  }, [])

  return (
    <>
      <div className={styles.titleImg}>
        <img src={titleImg.src} />
      </div>
      <div className={styles.container}>
        <div className={styles.img_wrapper}>
          <img
            className={styles.imgLG}
            src={headerImgLGScreen.src}
            alt="header.png"
            // width="100"
          />
          <img className={styles.img} src={headerImg.src} alt="header.png" />
        </div>
        <SignUp />
      </div>
    </>
  );
};

export default Home;

export async function getServerSideProps(context: any) {
  const token = context.req.cookie;

  if (token !== '') return { props: { isLoggedIn: true } };
  if (token === '') return { props: { isLoggedIn: false } };

  return {
    props: {},
  };
}
