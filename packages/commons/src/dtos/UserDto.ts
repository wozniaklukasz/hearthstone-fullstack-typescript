type UserDto = {
  email: string;
};

export type CreateUserDto = UserDto & {
  password: string;
};

export type GetUserDto = UserDto & {
  id: string;
  createdAt: string;
  updatedAt: string;
};
