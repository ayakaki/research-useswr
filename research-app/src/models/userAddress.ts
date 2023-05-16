type Address = {
  city: string;
  number: number;
};

export type UserAddress = {
  users: { address: Address }[];
};
