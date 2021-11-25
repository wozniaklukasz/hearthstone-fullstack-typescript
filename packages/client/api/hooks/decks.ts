import { UseMutationResult, useMutation, UseQueryResult, useQuery, UseQueryOptions } from 'react-query';
import { CreateDeckDto, GetDeckDto } from 'dto';
import { Error } from '../types';
import { createDeck, deleteDeck, getDeck, getDecks, updateDeck } from '../endpoints';

const useGetDecks = (): UseQueryResult<GetDeckDto[], Error> => useQuery('getDecks', () => getDecks());

const useGetDeck = (id: string): UseQueryResult<GetDeckDto[], Error> => useQuery(['getDeck', id], () => getDeck(id));

const useCreateDeck = (
  options?: UseQueryOptions<GetDeckDto, Error>,
): UseMutationResult<GetDeckDto, Error, CreateDeckDto> => useMutation((deck) => createDeck(deck), options);

const useUpdateDeck = (
  options?: UseQueryOptions<GetDeckDto, Error>,
): UseMutationResult<GetDeckDto, Error, GetDeckDto> => useMutation((deck) => updateDeck(deck), options);

const useDeleteDeck = (options?: UseQueryOptions<string, Error>): UseMutationResult<string, Error, string> =>
  useMutation((id) => deleteDeck(id), options);

export { useGetDecks, useGetDeck, useCreateDeck, useUpdateDeck, useDeleteDeck };
