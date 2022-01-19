import type { NextPage } from 'next';
import headerImg from '../public/headerImg.png';
import styles from '../styles/Home.module.css';
import Login from '../components/Login';
import headerImgLGScreen from '../public/headerImgLGScreen.png';
import titleImg from '../public/title.png';

const Home: NextPage = () => {
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
            width="100"
          />
          <img
            className={styles.img}
            src={headerImg.src}
            alt="header.png"
            width="100"
          />
        </div>
        <Login />
      </div>
    </>
  );
};

export default Home;
