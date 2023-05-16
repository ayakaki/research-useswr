import { axiosFetcher } from '../utils/axiosFetcher';
import useSWR from 'swr';

export const useUserAxios = (id: string) => {
  const { data, error, isLoading } = useSWR(
    `https://jsonplaceholder.typicode.com/users/${id}`,
    axiosFetcher
  );

  return { data, error, isLoading };
};
