import React, { useEffect } from 'react';
// import { useRouter } from 'next/router';
import type { NextPage } from 'next';

// import headerImgLGScreen from '../public/headerImgLGScreen.png';
// import headerImg from '../public/headerImg.png';
// import titleImg from '../public/title.png';

// import SignUp from '../components/SignUp';

// import styles from '../styles/Home.module.css';
// import Post from '../features/posts/';
import { Login, SignUp } from '../features/auth/';
import AuthLayout from '../components/AuthLayout';

//TODO make a better approach for jwt token
const Home: NextPage = () => {
  return (
    <>
      {/* <Login /> */}
      <AuthLayout>
        <SignUp />
      </AuthLayout>
    </>
  );
  // const Router = useRouter();

  // useEffect(() => {
  //   const token = localStorage.getItem('_t');

  //   const isAuth = localStorage.getItem('isAuth');

  //   if (token && isAuth === 'true') {
  //     Router.push('/home');
  //   }
  // });

  // return (
  //   <>
  //     <div className={styles.titleImg}>
  //       <img src={titleImg.src} />
  //     </div>
  //     <div className={styles.container}>
  //       <div className={styles.img_wrapper}>
  //         <img
  //           className={styles.imgLG}
  //           src={headerImgLGScreen.src}
  //           alt="header.png"
  //         />
  //         <img className={styles.img} src={headerImg.src} alt="header.png" />
  //       </div>
  //       <SignUp />
  //     </div>
  //   </>
  // );
};

export default Home;
