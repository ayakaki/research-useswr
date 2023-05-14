import type { NextPage } from 'next';
import useSWR from 'swr';
import { Base } from '../../components/axios/base';
import { useTodos } from '../../repositories/useTodos';
import { Address } from '../../components/axios/address';

const AxiosPage: NextPage = () => {
  const { data, error, isLoading } = useTodos();
  console.log({ data, error, isLoading });

  return (
    <>
      <h1>axios取得ページ</h1>
      <Base />
      <Address />
    </>
  );
};

export default AxiosPage;
