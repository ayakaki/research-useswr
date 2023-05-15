import { NextPage } from 'next';
import { Address } from '../../components/graphql/address';
import { Base } from '../../components/graphql/base';
import { AddressHoge } from '../../components/graphql/addresshoge';
import Link from 'next/link';

const GraphqlPage: NextPage = () => {
  return (
    <>
      <h1>GraphQL取得ページ</h1>
      <Base />
      <Address />
      <AddressHoge />
      <Link href="/axios">Axios検証ページに遷移する</Link>
    </>
  );
};

export default GraphqlPage;
