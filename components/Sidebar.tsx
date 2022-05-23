import React from 'react';
import { useEffect, useState } from 'react';
import Link from 'next/link';

import styles from '../styles/Sidebar.module.css';
import headerImg from '../public/headerImg.png';
import defaultProfile from '../public/defaultProfile.jpg';

import { BsBookmark } from 'react-icons/bs';
import { AiOutlineHome } from 'react-icons/ai';

import { FiSend } from 'react-icons/fi';

const Sidebar = () => {
  const [pfp, setPfp] = useState();

  useEffect(() => {
    const pfp: any = localStorage.getItem('pfp');
    setPfp(pfp);
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <img src={headerImg.src} />
        </div>
        <div className={styles.navigation}>
          <div className={styles.navWrapper}>
            <Link href="/" passHref={true}>
              <div className={styles.linkItemWrapper}>
                <AiOutlineHome className={styles.linkIcon} />
                <span className={styles.linkTxt}>Home</span>
              </div>
            </Link>

            <Link href="/profile">
              <div className={styles.linkItemWrapper}>
                <img
                  className={styles.linkPfp}
                  src={pfp !== 'undefined' ? pfp : defaultProfile.src}
                />
                <span className={styles.linkTxt}>Account</span>
              </div>
            </Link>

            <Link href="/createpost">
              <div className={styles.linkItemWrapper}>
                <FiSend className={styles.linkIcon} />
                <span className={styles.buttonText}>Post</span>
              </div>
            </Link>

            <Link href="/" passHref={true}>
              <div className={styles.linkItemWrapper}>
                <BsBookmark className={styles.linkIcon} />
                <span className={styles.linkTxt}>Favourites</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
