import { Dispatch, SetStateAction, useState } from 'react';
import { useDeletePostMutation } from '../utils/features/posts/postSlice';

import styles from '../styles/createpost.module.css';

interface DeleteModal {
  postId: string;
  postTitle: string;
  postImg: string;
  isDeleteModalHidden: boolean;
  setIsDeleteModalHidden: Dispatch<SetStateAction<boolean>>;
}

type PostDetails = {
  title: string;
  mediaUrl: string;
};

const DeleteModal = (props: DeleteModal) => {
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
      style={{ display: `${props.isDeleteModalHidden ? 'none' : ''}` }}
    >
      <h4>Edit Post</h4>
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
              onClick={() => props.setIsDeleteModalHidden(true)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default DeleteModal;
