import { useContext, useState } from 'react';
// import { AiOutlineUpload } from 'react-icons/ai';
import axios from '../utils/axios';
import { PostContext } from '../utils/postContext';
import styles from '../styles/createpost.module.css';

const CreatePost = () => {
  const [postDetails, setPostDetails] = useState<any>({
    title: '',
    img: {
      file: null,
      preview: '',
    },
  });

  // TODO go learn typescript
  const { hidden } = useContext<any>(PostContext);

  const handleOnChange = (e: any) => {
    setPostDetails({ ...postDetails, [e.target.name]: e.target.value });
  };

  const handleImgChange = (e: any) => {
    // TODO get clear about what's happening with this onloadend thing
    let reader = new FileReader();
    let file = e.target.files[0];

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

  const handleOnSubmit = async (e: any) => {
    e.preventDefault();

    let data = new FormData();
    data.append('file', postDetails.img.file);
    data.append('title', postDetails.title);

    const response = await axios.post('/posts/', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authentication: `Bearer ${document.cookie}`,
      },
    });

    console.log(response.data);

    // axios({
    //   method: 'POST',
    //   url: '/posts/',
    //   headers: {
    //     Authorization: `Bearer ${document.cookie}`,
    //     'Content-Type': 'application/json',
    //   },
    //   data: {
    //     title: postDetails.title,
    //     fileString: postDetails.img.preview,
    //   },
    // });
  };

  return (
    <div
      className={styles.container}
      style={{ display: `${hidden ? 'none' : ''}` }}
    >
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
            <button className={styles.post_button}>Post</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default CreatePost;
