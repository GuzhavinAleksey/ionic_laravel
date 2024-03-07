import axios from 'axios';

export default axios.create({

  baseURL: 'http://127.0.0.1:9090/api/',
  headers: {
    'Content-type': 'application/json',
  },

});
