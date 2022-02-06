import { FC, useEffect, useState, useContext } from 'react';
import Router from 'next/router';

import styles from '../styles/homepage.module.css';

import { AuthContext } from '../utils/authContext';
import WithAuth from '../utils/withAuth';

import Sidebar from '../components/Sidebar';
import CreatePost from '../components/CreatePost';
import Posts from '../components/Posts';

const Home: FC = () => {
  const { isUserValid } = useContext(AuthContext);

  useEffect(() => {
    const token = document.cookie.split(';');
    validate(token[1]);
  }, []);

  const validate = async (token: string) => {
    const result = await isUserValid(token.trim());

    if (!result.success)  {
      Router.push('/');
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
