import axios from 'axios';

export const jsonPlaceholderClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 1000,
  headers: {
    'X-Custom-Header': 'foobar'
  }
});
