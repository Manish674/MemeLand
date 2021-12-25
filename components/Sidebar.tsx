import styles from "../styles/Sidebar.module.css";
import Link from "next/link";
import headerImg from "../public/headerImg.png";
import {BsBookmark} from "react-icons/bs"

import {FiSend} from "react-icons/fi";

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src={headerImg.src} />
      </div>
      <div className={styles.navigation}>
        <div className={styles.navWrapper}>
          <Link href="/" >
            <div className={styles.linkItemWrapper}>
              <img className={styles.linkPfp} />
              <span className={styles.linkTxt}>Account</span>
            </div>
          </Link>

          <button className={styles.postButton}>
            <div className={styles.linkItemWrapper}>
              <FiSend className={styles.linkIcon}/>
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
  )
}

export default Sidebar;
