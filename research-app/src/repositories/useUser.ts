import useSWR from 'swr';
import { axiosFetcher } from '../utils/axiosFetcher';

export const useUser = (id: string) => {
  const { data, error, isLoading } = useSWR(
    `https://jsonplaceholder.typicode.com/users/${id}`,
    axiosFetcher
  );

  return { data, error, isLoading };
};
