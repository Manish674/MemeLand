import { useState } from 'react';
import styles from '../styles/post.module.css';
import Profile from './Profile';
import DeleteModal from '../components/DeleteModal';
import EditModal from '../components/EditModal';

const Post = (props: any) => {
  const [open, setIsOpen] = useState<boolean>(false);
  const displayValue = open ? '' : 'none';

  console.log(props);
  // const { title, mediaUrl, postedBy } = props;

  return (
    <>
      <DeleteModal />
      <EditModal />
      <div className={styles.container}>
        <div className={styles.header}>
          <Profile postedBy={postedBy} />
          <div className={styles.menu}>
            <span
              className={styles.dropdownButton}
              onClick={() => setIsOpen(!open)}
            >
              ...
            </span>
          </div>

          <div
            className={styles.menuContainer}
            style={{ display: `${displayValue}` }}
          >
            <div className={styles.menu_button}>
              <button className={styles.menu__button}>edit</button>
              <button className={styles.menu__button}>delete</button>
            </div>
          </div>
        </div>
        <div className={styles.imgWrapper}>
          <img className={styles.img} src={mediaUrl} alt={title} />
        </div>
        <div className={styles.textContent}>
          <h4 className={styles.title}>{title}</h4>
        </div>
      </div>
    </>
  );
};

export default Post;
