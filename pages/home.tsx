import { FC, useEffect, useState } from 'react';
import styles from '../styles/homepage.module.css';
import WithAuth from '../utils/withAuth';
import axios from '../utils/axios';
import Sidebar from '../components/Sidebar';
import CreatePost from '../components/CreatePost';
import Posts from '../components/Posts';

const Home: FC = () => {
  useEffect(() => {
    checkValidation();
  }, []);

  const checkValidation = async () => {
    try {
      const token = document.cookie;
      if (!token) return;

      const { data } = await axios({
        url: 'auth/validate',
        headers: {
          authentication: `Bearer ${token}`,
        },
      });

      // TODO Do it in context or it's time to find a good state management liberary
      const { username, email } = data.user;
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className={styles.container}>
      <Sidebar />
      <CreatePost />
      <div className={styles.app}>
        <Posts />
      </div>
    </div>
  );
};

export default WithAuth(Home);
