import { GetDeckDto } from 'commons/lib/dtos';
import { DeckDocument } from '../../../model';

const mapDaoToDto = (dao: DeckDocument): GetDeckDto => {
  return {
    id: dao._id,
    title: dao.title,
    createdAt: dao.createdAt,
    updatedAt: dao.updatedAt,
  };
};

const mapDaoListToDtoList = (daoList: DeckDocument[]): GetDeckDto[] => {
  return daoList.map((dao: DeckDocument) => mapDaoToDto(dao));
};

export { mapDaoToDto, mapDaoListToDtoList };
