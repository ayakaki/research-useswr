import { Address } from '../../components/axios/address';
import { Base } from '../../components/axios/base';
import { useTodos } from '../../repositories/useTodos';
import type { NextPage } from 'next';
import Link from 'next/link';

const AxiosPage: NextPage = () => {
  const { data, error, isLoading } = useTodos();
  console.log({ data, error, isLoading });

  return (
    <>
      <h1>axios取得ページ</h1>
      <Base />
      <Address />
      <Link href="/graphql">GraphQL検証ページに遷移する</Link>
    </>
  );
};

export default AxiosPage;
