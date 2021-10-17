import { DeckDao, GetDeckDto } from '../types';

const mapDaoToDto = (dao: DeckDao): GetDeckDto => {
  return {
    id: dao._id,
    title: dao.title,
    createdAt: dao.createdAt,
    updatedAt: dao.updatedAt,
  };
};

const mapDaoListToDtoList = (daoList: DeckDao[]): GetDeckDto[] => {
  return daoList.map((dao: DeckDao) => mapDaoToDto(dao));
};

export { mapDaoToDto, mapDaoListToDtoList };
