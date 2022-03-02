// import { getCookie } from '../utils/cookie';
import { FC } from 'react';
import styles from '../styles/homepage.module.css';
import WithAuth from '../utils/WithAuth';

import Sidebar from '../components/Sidebar';
// import CreatePost from '../components/CreatePost';
import Posts from '../components/Posts';
// import DeleteModal from '../components/DeleteModal';
// import EditModal from '../components/EditModal';

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
