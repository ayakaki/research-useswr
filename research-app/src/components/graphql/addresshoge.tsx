import { useUserGraphql } from '../../repositories/useUserGraphql';

export const AddressHoge: React.FC = () => {
  const query = `{
    users{
      address{
        city,
        number
      }
    }
  }`;

  const { data, error } = useUserGraphql(query);

  console.log({ data, error });

  return (
    <>
      <h2>住所情報2</h2>
      <ul>
        <li>number: {data?.users[0].address.number}</li>
      </ul>
    </>
  );
};
