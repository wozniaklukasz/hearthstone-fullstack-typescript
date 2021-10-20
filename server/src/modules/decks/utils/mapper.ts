import { GetDeckDto } from '../types';
import { TDeckDocument } from '../../../model';

const mapDaoToDto = (dao: TDeckDocument): GetDeckDto => {
  return {
    id: dao._id,
    title: dao.title,
    createdAt: dao.createdAt,
    updatedAt: dao.updatedAt,
  };
};

const mapDaoListToDtoList = (daoList: TDeckDocument[]): GetDeckDto[] => {
  return daoList.map((dao: TDeckDocument) => mapDaoToDto(dao));
};

export { mapDaoToDto, mapDaoListToDtoList };
