import { GetCardDto } from 'commons/lib/dtos';
import { CardDocument } from '../../../model/card';

const mapDaoToDto = (dao: CardDocument): GetCardDto => {
  return {
    id: dao._id,
    imageId: dao.imageId,
    name: dao.name,
    text: dao.text,
    flavor: dao.flavor,
    artist: dao.artist,
    attack: dao.attack,
    cardClass: dao.cardClass,
    collectible: dao.collectible,
    cost: dao.cost,
    elite: dao.elite,
    faction: dao.faction,
    health: dao.health,
    mechanics: dao.mechanics,
    rarity: dao.rarity,
    cardSet: dao.cardSet,
    type: dao.type,
  };
};

const mapDaoListToDtoList = (daoList: CardDocument[]): GetCardDto[] => {
  return daoList.map((dao: CardDocument) => mapDaoToDto(dao));
};

export { mapDaoToDto, mapDaoListToDtoList };
