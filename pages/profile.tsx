import { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import styles from '../styles/profile.module.css';
import axios from '../utils/axios';

type Details = {
  username: string;
  _id: string;
  posts: [];
  pfp: string;
};

const Profile = () => {
  const [details, setDetails] = useState<Details>();

  useEffect(() => {
    const token = localStorage.getItem('_t');
    fetchMySelf(token);
  }, []);

  const fetchMySelf = async (token: any) => {
    const { data } = await axios({
      method: 'GET',
      url: '/user/profile',
      headers: {
        authentication: `Bearer ${token}`,
      },
    });
    setDetails(data.result[0]);
  };

  console.log(details);

  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.profileContainer}>
        <div className={styles.profile}>
          <img className={styles.pfp} src={details?.pfp} />
          <div className={styles.text}>
            <h2>{details?.username}</h2>
          </div>
        </div>
        <div className={styles.postGrid}>
          {details?.posts.map((el: any) => (
            <img className={styles.img} src={el.mediaUrl} key={el._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
