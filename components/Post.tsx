import { useState } from 'react';
import styles from '../styles/post.module.css';
import Profile from './Profile';
import DeleteModal from '../components/DeleteModal';
import EditModal from '../components/EditModal';

const Post = (props: any) => {
  // for the menu { edit and delete}
  const [open, setIsOpen] = useState<boolean>(false);
  const displayValue = open ? '' : 'none';

  // for edit modal
  const [isHidden, setIsHidden] = useState(true);

  // for delet Modal
  const [isDeleteModalHidden, setIsDeleteModalHidden] = useState(true);

  const { title, mediaUrl, postedBy } = props;

  const handleEditMenuButtonClick = (executionType: 'Edit' | 'Delete') => {
    if (executionType === 'Edit') {
      setIsHidden(false);
      setIsOpen(false);
    } else if (executionType === 'Delete') {
      setIsDeleteModalHidden(false);
      setIsOpen(false);
    }
  };

  return (
    <>
      <DeleteModal
        postId={props._id}
        postTitle={title}
        postImg={mediaUrl}
        isDeleteModalHidden={isDeleteModalHidden}
        setIsDeleteModalHidden={setIsDeleteModalHidden}
      />
      <EditModal
        isHidden={isHidden}
        setIsHidden={setIsHidden}
        postId={props._id}
        postTitle={title}
        postImg={mediaUrl}
      />
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
              <button
                className={styles.menu__button}
                onClick={() => handleEditMenuButtonClick('Edit')}
              >
                edit
              </button>
              <button
                className={styles.menu__button}
                onClick={() => handleEditMenuButtonClick('Delete')}
              >
                delete
              </button>
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
