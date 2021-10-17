import {IGetDeckDto} from "./decks.dto";

const mapDaoToDto = (dao: any): IGetDeckDto => {
    return {
        id: dao._id,
        title: dao.title,
        createdAt: dao.createdAt,
        updatedAt: dao.updatedAt,
    }
}

const mapDaoListToDtoList = (daoList: any): IGetDeckDto[] => {
    return daoList.map((dao: any) => mapDaoToDto(dao))
}

export { mapDaoToDto, mapDaoListToDtoList };
