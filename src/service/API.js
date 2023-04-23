import axios from 'axios';

axios.defaults.baseURL = 'https://641ae0ae9b82ded29d43ff49.mockapi.io/contacts';

export const fetchAllUsers = async () => {
  const res = await axios.get('/users');
  return res.data;
};
