import apiMarvel from 'marvel-api';

const marvel = apiMarvel.createClient({
  publicKey: 'bcd0d1ec98bea664b61eb20f626c3d6d',
  privateKey: 'b2b7651a8871d57648ef223effe74ee9212741be'
});

export default marvel;
