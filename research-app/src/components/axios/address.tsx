import { useUserAxios } from '../../repositories/useUserAxios';

export const Address: React.FC = () => {
  const { data, error, isLoading } = useUserAxios(`1`);

  return (
    <>
      <h2>住所情報</h2>
      <ul>
        <li>city: {data?.address.city}</li>
      </ul>
    </>
  );
};
