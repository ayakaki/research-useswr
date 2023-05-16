import { axiosFetcher } from '../utils/axiosFetcher';
import useSWR from 'swr';

export const useUserAxios = <T = any>(id: string) => {
  const { data, error, isLoading } = useSWR<T>(
    `https://jsonplaceholder.typicode.com/users/${id}`,
    axiosFetcher
  );

  return { data, error, isLoading };
};
