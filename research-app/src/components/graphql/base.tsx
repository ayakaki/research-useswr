import { useUserGraphql } from '../../repositories/useUserGraphql';

export const Base: React.FC = () => {
  const query = `{
    users {
      id,
      email,
      address {
        city,
        number,
      }
    }
  }`;

  const { data, error } = useUserGraphql(query);

  console.log({ data, error });

  return (
    <>
      <h2>住所情報</h2>
      <ul>
        <li>id: {data?.users[0].id}</li>
        <li>email: {data?.users[0].email}</li>
      </ul>
    </>
  );
};
