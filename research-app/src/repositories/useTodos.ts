import useSWR from 'swr';
import { axiosFetcher } from '../utils/axiosFetcher';

export const useTodos = () => {
  const { data, error, isLoading } = useSWR(
    `https://jsonplaceholder.typicode.com/todos`,
    axiosFetcher
  );

  return { data, error, isLoading };
};
