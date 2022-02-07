import styles from '../styles/Sidebar.module.css';
import Link from 'next/link';
import headerImg from '../public/headerImg.png';
import { BsBookmark } from 'react-icons/bs';
import { AiOutlineHome } from "react-icons/ai"
import { useContext } from 'react';
import { PostContext } from '../utils/postContext';

import { FiSend } from 'react-icons/fi';

const Sidebar = () => {
  const { hidden, setHidden } = useContext<any>(PostContext);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <img src={headerImg.src} />
        </div>
        <div className={styles.navigation}>
          <div className={styles.navWrapper}>
            <Link href="/home" passHref={true}>
              <div className={styles.linkItemWrapper}>
                <AiOutlineHome className={styles.linkIcon} />
                <span className={styles.linkTxt}>Home</span>
              </div>
            </Link>

            <Link href="/profile">
              <div className={styles.linkItemWrapper}>
                <img className={styles.linkPfp} />
                <span className={styles.linkTxt}>Account</span>
              </div>
            </Link>

            <button
              className={styles.postButton}
              onClick={() => setHidden(!hidden)}
            >
              <div className={styles.linkItemWrapper}>
                <FiSend className={styles.linkIcon} />
                <span className={styles.buttonText}>Post</span>
              </div>
            </button>

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
