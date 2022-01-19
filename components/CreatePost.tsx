import styles from '../styles/createpost.module.css';
import { useContext, useState } from 'react';
import { PostContext } from '../utils/postContext';
import { AiOutlineUpload } from 'react-icons/ai';

const CreatePost = () => {
  const [postDetails, setPostDetails] = useState<any>({
    title: '',
    img: {
      file: '',
      preview: '',
    },
  });

  const { hidden, createPost } = useContext<any>(PostContext);

  const handleOnChange = (e: any) => {
    setPostDetails({ ...postDetails, [e.target.name]: e.target.value });
  };

  const handleImgChange = (e: any) => {
    // TODO get clear about what's happening with this onloadend thing
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      console.log(reader.result);
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

  const handleOnSubmit = async (e: any) => {
    e.preventDefault();
  };

  return (
    <div className={styles.container}>
      <h4>Create new post</h4>
      <div className={styles.wrapper}>
        <form className={styles.form} onSubmit={(e) => handleOnSubmit(e)}>
          <input
            className={styles.input}
            placeholder="what's happening..."
            name="title"
            value={postDetails.title}
            onChange={(e) => handleOnChange(e)}
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
