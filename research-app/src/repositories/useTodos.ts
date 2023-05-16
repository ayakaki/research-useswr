import { axiosFetcher } from '../utils/axiosFetcher';
import useSWR from 'swr';

export const useTodos = () => {
  const { data, error, isLoading } = useSWR(
    `https://jsonplaceholder.typicode.com/todos`,
    axiosFetcher
  );

  return { data, error, isLoading };
};
