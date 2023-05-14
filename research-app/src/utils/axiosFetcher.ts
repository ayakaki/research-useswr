import axios from 'axios';

export const axiosFetcher = async (endPoint: string) => {
  return axios.get(endPoint).then((res) => {
    return res.data;
  });
};
