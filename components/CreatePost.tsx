import React, { useState } from 'react';

import { useCreatePostMutation } from '../features/posts/postApi';
import styles from '../styles/createpost.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreatePost = () => {
  const [createPost, result] = useCreatePostMutation();

  const [postDetails, setPostDetails] = useState<any>({
    title: '',
    img: {
      file: null,
      preview: '',
    },
  });

  // TODO go learn typescript
  const handleOnChange = (e: any) => {
    setPostDetails({ ...postDetails, [e.target.name]: e.target.value });
  };

  const handleImgChange = (e: any) => {
    // TODO get clear about what's happening with this onloadend thing
    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onloadend = () => {
      setPostDetails({
        ...postDetails,
        img: {
          file: file,
          preview: reader.result,
        },
      });
    };

    reader.readAsDataURL(file);
  };

  // CREATE post
  const handleOnSubmit = async (e: any) => {
    e.preventDefault();

    const data = new FormData();
    data.append('file', postDetails.img.file);
    data.append('title', postDetails.title);

    const token = localStorage.getItem('accessToken');
    if (token === null) return 'TOKEN NOT FOUND';
    const res = await createPost({ data, token: token });

    if (res.data) {
      toast(res.data?.message);
      handleOnCancelClick();
    }
  };

  const handleOnCancelClick = () => {
    setPostDetails({
      title: '',
      img: {
        file: null,
        preview: '',
      },
    });
  };

  return (
    <div className={styles.container}>
      <ToastContainer />
      <h4>Create new post</h4>
      <div className={styles.wrapper}>
        <form className={styles.form} onSubmit={(e) => handleOnSubmit(e)}>
          <input
            className={styles.input}
            placeholder="what's happening..."
            name="title"
            value={postDetails.title}
            onChange={(e) => handleOnChange(e)}
            autoComplete="off"
          />
          <div className={styles.img_preview}>
            {postDetails.img.preview ? (
              <img
                className={styles.preview_img}
                alt=""
                src={postDetails.img.preview}
              />
            ) : (
              <input
                type="file"
                placeholder="upload file here..."
                name="file"
                onChange={(e) => handleImgChange(e)}
              />
            )}
            {/* <div className={styles.upload_text}> */}
            {/*   <p>Upload img here...</p> */}
            {/*   <AiOutlineUpload className={styles.upload_icon} /> */}
            {/* </div> */}
          </div>
          <div className={styles.button_wrapper}>
            <button className={styles.post_button} type="submit">
              Post
            </button>
            <button
              className={styles.post_button}
              type="reset"
              onClick={() => handleOnCancelClick()}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default CreatePost;
