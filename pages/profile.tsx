import React from 'react';
import { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import styles from '../styles/profile.module.css';
import axios from '../utils/axios';
import DefaultProfile from '../public/defaultProfile.jpg';
import { useGetCurrentUserProfileQuery } from '../features/profile/profileApi';
import WithAuth from '../utils/WithAuth';

type Details = {
  username: string;
  _id: string;
  posts: [];
  pfp: string;
};

const Profile = () => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    setToken(token);
  }, []);

  const { data, isLoading, error } = useGetCurrentUserProfileQuery(token, {
    skip: token !== null ? false : true,
  });

  const [details, setDetails] = useState<Details>();

  return (
    <>
      {isLoading ? (
        <div>loading....</div>
      ) : data ? (
        <div className={styles.container}>
          <Sidebar />
          <div className={styles.profileContainer}>
            <div className={styles.profile}>
              <img
                className={styles.pfp}
                src={
                  data.result[0]?.pfp ? data.result[0].pfp : DefaultProfile.src
                }
              />
              <div>
                <div className={styles.text}>
                  <h2>{data.result[0]?.username}</h2>
                </div>
                <input
                  type="file"
                  name="uploadfile"
                  id="img"
                  style={{ display: 'none' }}
                />
                {/* add upload logo here */}
                <label htmlFor="img" className={styles.uploadLabel}>
                  upload pfp
                </label>
              </div>
            </div>
            <div className={styles.postGrid}>
              {data.result[0]?.posts.map((el: any) => (
                <img className={styles.img} src={el.mediaUrl} key={el._id} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div>Something went really really wrong</div>
      )}
    </>
  );
};

export default WithAuth(Profile);
