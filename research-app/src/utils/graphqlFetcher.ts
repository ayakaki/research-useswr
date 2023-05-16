import request from 'graphql-request';

export const graphqlFetcher = async <T = any>(query: string): Promise<T> => {
  return request('https://jsonplaceholder.ir/graphql', query).then(
    (data: any) => data as T
  );
};
