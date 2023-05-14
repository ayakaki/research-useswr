import { useUser } from '../../repositories/useUserAxios';

export const Base: React.FC = () => {
  const { data, error, isLoading } = useUser(`1`);

  return (
    <>
      <h2>基本情報</h2>
      <ul>
        <li>id: {data?.id}</li>
        <li>name: {data?.name}</li>
      </ul>
    </>
  );
};
