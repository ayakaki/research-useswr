import useSWR from 'swr';
import { axiosFetcher } from '../utils/axiosFetcher';
import { graphqlFetcher } from '../utils/graphqlFetcher';

export const useUserGraphql = (query: string) => {
  const { data, error } = useSWR(query, graphqlFetcher);

  return { data, error };
};
