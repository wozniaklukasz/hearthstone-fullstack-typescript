// todo: change any to enums

type CardDto = {
  imageId: string;
  name: string;
  text: string;
  flavor: string;
  artist: string;
  attack: number;
  cardClass: any;
  collectible: boolean;
  cost: number;
  elite: boolean;
  faction: any;
  health: number;
  mechanics: any[];
  rarity: any;
  set: any;
  type: any;
};

export type CreateCardDto = CardDto & Record<string, unknown>;

export type GetCardDto = CardDto & {
  id: string;
};
