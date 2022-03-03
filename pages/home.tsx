import React from 'react';

import { FC } from 'react';

import styles from '../styles/homepage.module.css';
import WithAuth from '../utils/WithAuth';

import Sidebar from '../components/Sidebar';
import Posts from '../components/Posts';

const Home: FC = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
      {/* <CreatePost /> */}
      <div className={styles.app}>
        <Posts />
        {/* <DeleteModal /> */}
        {/* <EditModal /> */}
      </div>
    </div>
  );
};

export default WithAuth(Home);
