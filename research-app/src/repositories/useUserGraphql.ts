import { graphqlFetcher } from '../utils/graphqlFetcher';
import useSWR from 'swr';

export const useUserGraphql = (query: string) => {
  const { data, error } = useSWR(query, graphqlFetcher);

  return { data, error };
};
