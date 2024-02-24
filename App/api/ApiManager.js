import Config from 'react-native-config';
import axios from 'axios';

const ApiManager = axios.create({
  baseURL: 'http://192.168.1.11:8080',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
  },
});

export default ApiManager;