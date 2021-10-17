import { GetDeckDto } from '../types';

const mapDaoToDto = (dao: any): GetDeckDto => {
  return {
    id: dao._id,
    title: dao.title,
    createdAt: dao.createdAt,
    updatedAt: dao.updatedAt,
  };
};

const mapDaoListToDtoList = (daoList: any): GetDeckDto[] => {
  return daoList.map((dao: any) => mapDaoToDto(dao));
};

export { mapDaoToDto, mapDaoListToDtoList };
