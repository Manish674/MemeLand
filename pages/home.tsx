import { FC, useEffect } from 'react';
import WithAuth from '../utils/withAuth';
import Sidebar from '../components/Sidebar';
import CreatePost from '../components/CreatePost';
import axios from '../utils/axios';

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
    <div>
      <Sidebar />
      <CreatePost />
    </div>
  );
};

export default WithAuth(Home);
