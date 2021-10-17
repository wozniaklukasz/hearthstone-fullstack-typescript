interface IDeckDto {
    title: string;
}

export interface ICreateDeckDto extends IDeckDto {}

export interface IGetDeckDto extends IDeckDto {
    id: string;
    createdAt: string;
    updatedAt: string;
}
