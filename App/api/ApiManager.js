import Config from 'react-native-config';
import axios from 'axios';

const ApiManager = axios.create({
  baseURL: 'https://api.caucalamdev.io.vn',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
  },
});

export default ApiManager;