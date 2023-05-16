import { graphqlFetcher } from '../utils/graphqlFetcher';
import useSWR from 'swr';

export const useUserGraphql = <T = any>(query: string) => {
  const { data, error } = useSWR<T>(query, graphqlFetcher);

  return { data, error };
};
