import axios from 'axios';

export default axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_ENV === 'dev'
      ? 'http://localhost:8000/api/v1'
      : `${process.env.NEXT_PUBLIC_URI}/api/v1`,
});
