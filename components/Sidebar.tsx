import styles from "../styles/Sidebar.module.css";
import Link from "next/link";
import headerImg from "../public/headerImg.png";

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src={headerImg.src} />
      </div>
      <div className={styles.navigation}>
        <div className={styles.navWrapper}>
          <Link href="/">
            Account
          </Link>
          <Link href="/">
            Post
          </Link>
          <Link href="/">
            Favourites
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;
