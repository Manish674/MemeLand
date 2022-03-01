// import { getCookie } from '../utils/cookie';
import { FC, useEffect, useState, useContext } from 'react';
import Router from 'next/router';

/* REDUX state */
// import { RootState } from '../utils/store';
// import { useSelector, useDispatch } from 'react-redux';
import { useGetPokemonByNameQuery } from '../utils/features/services/users';
/**************/

import styles from '../styles/homepage.module.css';

import { AuthContext } from '../utils/authContext';
import WithAuth from '../utils/withAuth';

import Sidebar from '../components/Sidebar';
// import CreatePost from '../components/CreatePost';
import Posts from '../components/Posts';
import DeleteModal from '../components/DeleteModal';
// import EditModal from '../components/EditModal';

const Home: FC = () => {
  // const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur');

  const { isUserValid } = useContext(AuthContext);

  useEffect(() => {
    const token: string = document.cookie;
    validate(token);
  }, []);


  const validate = async (token: string) => {
    const result = await isUserValid(token.trim());

    if (!result.success) {
      Router.push('/');
    }
  };


  return (
    <div className={styles.container}>
      <Sidebar />
      {/* <CreatePost /> */}
      <div className={styles.app}>
        <Posts />
        <DeleteModal />
        {/* <EditModal /> */}
      </div>
    </div>
  );
};

export default WithAuth(Home);
