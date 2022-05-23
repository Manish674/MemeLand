import React from 'react';

import styles from '../styles/createpost.module.css';

import CreatePost from '../components/CreatePost';
import Layout from '../components/Layout';

const createpost = () => {
  return (
    <Layout>
      <div className={styles.createPostWrapper}>
        <CreatePost />
      </div>
    </Layout>
  );
};

export default createpost;
