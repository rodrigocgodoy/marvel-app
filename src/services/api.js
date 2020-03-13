import axios from 'axios';

const marvelData = axios.create({
  baseURL: 'https://gateway.marvel.com',
  params: {
    apikey: 'bcd0d1ec98bea664b61eb20f626c3d6d'
  }
  // timeout: 10000
});

export default marvelData;
