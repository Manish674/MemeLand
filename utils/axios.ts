import axios from 'axios';

export default axios.create({
  baseURL:
    process.env.NEXT_PUBLIC === 'dev'
      ? 'http://localhost:8000/api/v1'
      : `${process.env.NEXT_PUBLIC_URI}/api/v1`,

  // headers: {
  //   // 'Content-type': 'application/json',
  //   // 'Access-Control-Allow-Origin': 'https://memeland4905.herokuapp.com',
  // },
});
