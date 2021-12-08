import { GetUserDto } from 'commons/lib/dtos';
import { UserDocument } from '../../../model/user';

const mapDaoToDto = (user: UserDocument): GetUserDto => {
  return {
    id: user._id,
    email: user.email,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  };
};

const mapDaoListToDtoList = (daoList: UserDocument[]): GetUserDto[] => {
  return daoList.map((dao: UserDocument) => mapDaoToDto(dao));
};

export { mapDaoToDto, mapDaoListToDtoList };
