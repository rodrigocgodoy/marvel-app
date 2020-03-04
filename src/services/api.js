import axios from 'axios';

const apiKey = 'bcd0d1ec98bea664b61eb20f626c3d6d';

const api = axios.create({
  baseURL: `https://gateway.marvel.com:443/v1/public/characters?apikey=${apiKey}`
});

export default api;
