import axios from 'axios';

const request = axios.create({
  baseURL: 'https://swapi.dev/api/films/',
  validateStatus: false,
});

export default request;
