import axios from 'axios';
import { FC, useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';

interface user {
  username: string;
  email: string;
}

const Home: FC = () => {
  const [detail, setDetail] = useState<user>({
    username: '',
    email: '',
  });

  useEffect(() => {}, []);

  return (
    <div>
      <Sidebar />
    </div>
  );
};

export default Home;
