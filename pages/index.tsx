import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import type { NextPage } from 'next';

import headerImgLGScreen from '../public/headerImgLGScreen.png';
import headerImg from '../public/headerImg.png';
import titleImg from '../public/title.png';

import SignUp from '../components/SignUp';

import styles from '../styles/Home.module.css';

//TODO make a better approach for jwt token
const Home: NextPage = () => {
  const Router = useRouter();

  useEffect(() => {
    // const token = localStorage.getItem('_t');
    // const isAuth = localStorage.getItem('isAuth');

    // if (token && isAuth) {
    //   Router.push('/home');
    // }
  });

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
          />
          <img className={styles.img} src={headerImg.src} alt="header.png" />
        </div>
        <SignUp />
      </div>
    </>
  );
};

export default Home;
