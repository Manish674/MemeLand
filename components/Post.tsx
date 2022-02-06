import styles from '../styles/post.module.css';
import Profile from './Profile';

const Post = ({ title, mediaUrl }) => {
  return (
    <div className={styles.container}>
      <Profile />
      <div className={styles.imgWrapper}>
        <img className={styles.img} src={mediaUrl} alt={title} />
      </div>
      <h4 className={styles.title}>{title}</h4>
    </div>
  );
};

export default Post;
