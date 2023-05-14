import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <>
      <h2>調査URL</h2>
      <ul>
        <li>
          axios: <Link href="/axios">/axios</Link>
        </li>
        <li>
          GraphQL: <Link href="/graphql">/graphql</Link>
        </li>
      </ul>
    </>
  );
};

export default Home;
