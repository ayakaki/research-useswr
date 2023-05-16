import { Address } from '../../components/graphql/address';
import { AddressHoge } from '../../components/graphql/addresshoge';
import { Base } from '../../components/graphql/base';
import { NextPage } from 'next';
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
