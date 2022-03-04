import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:4000/api/v1/',
  // baseURL: 'https://memeland4905.herokuapp.com/api/v1',
  headers: {
    'Content-type': 'application/json',
    // 'Access-Control-Allow-Origin': 'https://memeland4905.herokuapp.com',
  },
});
