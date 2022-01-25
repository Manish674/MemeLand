import styles from '../styles/post.module.css';

const Post = ({ title, mediaUrl }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgWrapper}>
        <img className={styles.img} src={mediaUrl} alt={title} />
      </div>
      <div className={styles.profile}></div>
      <h4 className={styles.title}>{title}</h4>
    </div>
  );
};

export default Post;
