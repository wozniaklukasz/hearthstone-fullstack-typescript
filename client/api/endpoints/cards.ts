import api from '../axios';

const getCards = () => api.get('cards');
const getCard = (id: string) => api.get(`cards/${id}`);

export { getCards, getCard };
