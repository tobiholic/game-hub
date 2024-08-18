import { fadeConfig } from '@chakra-ui/react';
import axios, { AxiosRequestConfig } from 'axios';

export interface FetchResponse<T> {
  count: number;
  results: T[];
  next?: T[];
}

const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'fda5c5775a4c4a28b0388abc1efe3ca0',
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
}

export default APIClient;
