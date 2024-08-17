import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'fda5c5775a4c4a28b0388abc1efe3ca0',
  },
});
