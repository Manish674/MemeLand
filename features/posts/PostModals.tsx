import React, { Dispatch, SetStateAction, useState } from 'react';
import { useDeletePostMutation } from './postApi';

import styles from '../../styles/createpost.module.css';

interface Modal {
  postId: string;
  postTitle: string;
  postImg: string;
  isModalHidden: { visible: boolean; mode: 'Edit' | 'Delete' | '' };
  setIsModalHidden: Dispatch<
    SetStateAction<{ visible: boolean; mode: 'Edit' | 'Delete' | '' }>
  >;
}

type PostDetails = {
  title: string;
  mediaUrl: string;
};

const Modal = (props: Modal) => {
  const [postDetails, setPostDetails] = useState<PostDetails>({
    title: props.postTitle,
    mediaUrl: props.postImg,
  });

  const [deletePost, result] = useDeletePostMutation();
  // const [DeletePost, result] = useDeletePostMutation();

  const handleOnChange = (e: any) => {
    setPostDetails({ ...postDetails, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = async (e: any) => {
    e.preventDefault();
    deletePost(props.postId);
  };

  return (
    <div
      className={styles.container}
      style={{ display: `${!props.isModalHidden.visible ? 'none' : ''}` }}
    >
      <h4>{props.isModalHidden.mode} Post</h4>
      <div className={styles.wrapper}>
        <form className={styles.form} onSubmit={(e) => handleOnSubmit(e)}>
          <input
            className={styles.input}
            placeholder="Title"
            name="title"
            value={postDetails.title}
            onChange={(e) => handleOnChange(e)}
            autoComplete="off"
            disabled={true}
          />
          <div className={styles.img_preview}>
            <img
              className={styles.preview_img}
              alt=""
              src={postDetails.mediaUrl}
            />
          </div>
          <div className={styles.button_wrapper}>
            <button className={styles.post_button}>Delete</button>

            <button
              className={styles.post_button}
              onClick={() =>
                props.setIsModalHidden({
                  ...props.isModalHidden,
                  visible: true,
                })
              }
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Modal;
