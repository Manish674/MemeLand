import styles from '../styles/post.module.css';
import Profile from './Profile';

const Post = (props: any) => {
  const { title, mediaUrl, postedBy } = props;
  console.log(postedBy);

  return (
    <div className={styles.container}>
      <Profile postedBy={postedBy} />
      <div className={styles.imgWrapper}>
        <img className={styles.img} src={mediaUrl} alt={title} />
      </div>
      <div className={styles.textContent}>
        <h4 className={styles.title}>{title}</h4>
      </div>
    </div>
  );
};

export default Post;
