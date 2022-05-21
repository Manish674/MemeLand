import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar';
import styles from '../../styles/profile.module.css';
// import axios from '../../utils/axios';

type Details = {
  pfp: string;
  username: string;
  posts: Array<any>;
};

const Profile = () => {
  // const [details, setDetails] = useState<Details>({
  //   pfp: '',
  //   username: '',
  //   posts: [],
  // });

  // useEffect(() => {
  //   const str = document.URL.split('/');
  //   const id = str[str.length - 1];

  //   const token = document.cookie;
  //   fetchUser(id, token);
  // }, []);

  // const fetchUser = async (id: string, token: string) => {
  //   const { data } = await axios({
  //     method: 'GET',
  //     url: `/user/profile/${id}`,
  //     headers: {
  //       authentication: `Bearer ${token}`,
  //     },
  //   });
  //   setDetails(data.result);
  // };

  return (
    <div>hello world</div>
    // <div className={styles.container}>
    //   <Sidebar />
    //   <div className={styles.profileContainer}>
    //     <div className={styles.profile}>
    //       <img className={styles.pfp} src={details?.pfp} />
    //       <div className={styles.text}>
    //         <h2>{details?.username}</h2>
    //       </div>
    //     </div>
    //     <div className={styles.postGrid}>
    //       {details?.posts.map((el: any) => (
    //         <img className={styles.img} src={el.mediaUrl} key={el._id} />
    //       ))}
    //     </div>
    //   </div>
    // </div>
  );
};

export default Profile;
