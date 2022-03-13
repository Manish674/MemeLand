import React from 'react';

import styles from '../styles/createpost.module.css';

import CreatePost from '../components/CreatePost';
import Sidebar from '../components/Sidebar';

const createpost = () => {
  return (
    <div className={styles.mainContainer}>
      <Sidebar />
      <div className={styles.createPostWrapper}>
        <CreatePost />
      </div>
    </div>
  );
};

export default createpost;
