import styles from '../styles/createpost.module.css';
import { useContext, useState } from 'react';
import { PostContext } from '../utils/postContext';
import { AiOutlineUpload } from 'react-icons/ai';

const CreatePost = () => {
  const [media, setMedia] = useState();
  const [postTitle, setPostTitle] = useState('');
  const [previewUrl, setPreviewUrl] = useState<any>();
  const { hidden, createPost } = useContext<any>(PostContext);

  const handleOnChange = (e: any) => {
    setPostTitle(e.target.value);
  };

  const handleImgChange = (e: any) => {
    setMedia(e.target.files[0]);
    const url = URL.createObjectURL(e.target.files[0]);
    setPreviewUrl(url);
  };

  const handleOnSubmit = async (e: any) => {
    e.preventDefault();
    const postData = {
      media,
      postTitle,
    };
    const data = await createPost(postData);

    console.log(data);
  };

  return (
    <div className={styles.container}>
      <h4>Create new post</h4>
      <div className={styles.wrapper}>
        <form className={styles.form} onSubmit={(e) => handleOnSubmit(e)}>
          <input
            className={styles.input}
            placeholder="what's happening..."
            onChange={(e) => handleOnChange(e)}
          />
          <div className={styles.img_preview}>
            {previewUrl ? (
              <img className={styles.preview_img} alt="" src={previewUrl} />
            ) : (
              <input
                type="file"
                placeholder="upload file here..."
                onChange={(e) => handleImgChange(e)}
              />
            )}
            {/* <div className={styles.upload_text}> */}
            {/*   <p>Upload img here...</p> */}
            {/*   <AiOutlineUpload className={styles.upload_icon} /> */}
            {/* </div> */}
          </div>
          <div className={styles.button_wrapper}>
            <button className={styles.post_button}>Post</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default CreatePost;
