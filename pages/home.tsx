import { FC, useState } from 'react';
import WithAuth from '../utils/withAuth';
import Sidebar from '../components/Sidebar';
import CreatePost from '../components/CreatePost';

interface user {
  username: string;
  email: string;
}

const Home: FC = () => {
  const [detail, setDetail] = useState<user>({
    username: '',
    email: '',
  });

  return (
    <div>
      <Sidebar />
      <CreatePost />
    </div>
  );
};

export default WithAuth(Home);
