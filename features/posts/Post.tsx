import React, { useEffect, useState } from 'react';
import styles from '../styles/post.module.css';
import Profile from '../../components/Profile';
import Modal from './PostModals';
// import EditModal from '../components/EditModal';

const Post = (props: any) => {
  const [loggedUser, setLoggedUser] = useState<string>('');

  useEffect(() => {
    const user = localStorage.getItem('username');
    setLoggedUser(user ? user : '');
  }, []);

  // for the menu { edit and delete}
  const [open, setIsOpen] = useState<boolean>(false);
  const displayValue = open ? '' : 'none';

  // for edit modal
  // const [isHidden, setIsHidden] = useState(true);
  // for delete Modal
  const [isModalHidden, setIsModalHidden] = useState<{
    visible: boolean;
    mode: 'Edit' | 'Delete' | '';
  }>({
    visible: false,
    mode: '',
  });

  const { title, mediaUrl, postedBy } = props;

  const handleEditMenuButtonClick = (executionType: 'Edit' | 'Delete') => {
    if (executionType === 'Edit') {
      setIsModalHidden({ visible: true, mode: 'Edit' });
      setIsOpen(false);
    } else if (executionType === 'Delete') {
      setIsModalHidden({ visible: true, mode: 'Delete' });
      setIsOpen(false);
    }
  };

  return (
    <>
      <Modal
        postId={props._id}
        postTitle={title}
        postImg={mediaUrl}
        isModalHidden={isModalHidden}
        setIsModalHidden={setIsModalHidden}
      />
      {/* <EditModal */}
      {/*   isHidden={isHidden} */}
      {/*   setIsHidden={setIsHidden} */}
      {/*   postId={props._id} */}
      {/*   postTitle={title} */}
      {/*   postImg={mediaUrl} */}
      {/* /> */}
      <div className={styles.container}>
        <div className={styles.header}>
          <Profile postedBy={postedBy} />
          {loggedUser === postedBy.username && (
            <div className={styles.menu}>
              <span
                className={styles.dropdownButton}
                onClick={() => setIsOpen(!open)}
              >
                ...
              </span>
            </div>
          )}

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
