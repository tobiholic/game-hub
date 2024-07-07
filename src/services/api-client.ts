import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '73bf6e44d6df4950af092c72f8755528',
  },
});
