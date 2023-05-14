import request from 'graphql-request';

export const graphqlFetcher = async (query: string) => {
  return request('https://jsonplaceholder.ir/graphql', query).then(
    (data: any) => data
  );
};
