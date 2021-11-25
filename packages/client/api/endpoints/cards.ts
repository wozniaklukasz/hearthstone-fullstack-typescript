import api from '../axios';
import { GetCardDto } from 'commons/lib/dtos';

const getCards = (): Promise<{ data: GetCardDto[] }> => api.get('cards');
const getCard = (id: string): Promise<{ data: GetCardDto }> => api.get(`cards/${id}`);

export { getCards, getCard };
