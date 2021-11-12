import api from '../axios';
import { GetCardDto } from 'dto';

const getCards = (): Promise<{ data: GetCardDto[] }> => api.get('cards');
const getCard = (id: string): Promise<{ data: GetCardDto }> => api.get(`cards/${id}`);

export { getCards, getCard };
