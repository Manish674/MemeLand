import { useContext } from 'react';
import { PostContext } from '../utils/postContext';

const EditModal = () => {
  const data = useContext(PostContext);
  if (data === null) return;

  return <button>Click to log data in the console</button>;
};

export default EditModal;
