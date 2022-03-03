import { Dispatch, SetStateAction, useState } from 'react';
import { useUpdatePostMutation } from '../utils/features/posts/postSlice';

import styles from '../styles/createpost.module.css';

interface EditPost {
  postId: string;
  postTitle: string;
  postImg: string;
  isHidden: boolean;
  setIsHidden: Dispatch<SetStateAction<boolean>>;
}

type PostDetails = {
  title: string;
  mediaUrl: string;
};

const EditPost = (props: EditPost) => {
  const [postDetails, setPostDetails] = useState<PostDetails>({
    title: props.postTitle,
    mediaUrl: props.postImg,
  });

  const [updatePost, result] = useUpdatePostMutation();

  const handleOnChange = (e: any) => {
    setPostDetails({ ...postDetails, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = async (e: any) => {
    e.preventDefault();

    const params = { id: props.postId, Post: { title: postDetails.title } };
    updatePost(params);
  };

  return (
    <div
      className={styles.container}
      style={{ display: `${props.isHidden ? 'none' : ''}` }}
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
          />
          <div className={styles.img_preview}>
            <img
              className={styles.preview_img}
              alt=""
              src={postDetails.mediaUrl}
            />
          </div>
          <div className={styles.button_wrapper}>
            <button className={styles.post_button}>update</button>

            <button
              className={styles.post_button}
              onClick={() => props.setIsHidden(true)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default EditPost;
