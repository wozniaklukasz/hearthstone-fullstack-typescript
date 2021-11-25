import React, { useCallback } from 'react';
import Link from 'next/link';
import { GetServerSideProps } from 'next';
import Layout from 'layout';
import { GetDeckDto } from 'commons/lib/dtos';
import { useCreateDeck, useDeleteDeck, useGetDecks, useUpdateDeck, getDecks } from 'api';

interface Props {
  initDecks: GetDeckDto[];
}

const Decks: React.FC<Props> = ({ initDecks }) => {
  const { refetch, data: fetchedDecks, isLoading: isGetDeckLoading } = useGetDecks();

  const onMutationSuccess = useCallback(
    async (data) => {
      // todo: alert success
      console.log('onSuccess', data);
      await refetch();
    },
    [refetch],
  );

  const onMutationError = useCallback((error) => {
    // todo: alert error
    console.log('onError', error);
  }, []);

  const { mutate: createDeck, isLoading: isCreateDeckLoading } = useCreateDeck({
    onSuccess: onMutationSuccess,
    onError: onMutationError,
  });
  const { mutate: deleteDeck, isLoading: isDeleteDeckLoading } = useDeleteDeck({
    onSuccess: onMutationSuccess,
    onError: onMutationError,
  });
  const { mutate: updateDeck, isLoading: isUpdateDeckLoading } = useUpdateDeck({
    onSuccess: onMutationSuccess,
    onError: onMutationError,
  });

  const isLoading = isCreateDeckLoading || isGetDeckLoading || isDeleteDeckLoading || isUpdateDeckLoading;
  const decks = (fetchedDecks && fetchedDecks.data) || initDecks;

  return (
    <Layout title="Decks">
      {isLoading && 'LOADING!'}
      <button
        onClick={() =>
          createDeck({
            title: `New deck!`,
          })
        }
      >
        Create
      </button>
      <table>
        <thead>
          <tr>
            <th>title</th>
            <th>createdAt</th>
            <th>updatedAt</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {decks.map((deck) => (
            <tr key={deck.id}>
              <td>{deck.title}</td>
              <td>{deck.createdAt}</td>
              <td>{deck.updatedAt}</td>
              <td>
                <Link href={`/decks/${deck.id}`}>
                  <button>Link</button>
                </Link>
                <button
                  onClick={() =>
                    updateDeck({
                      ...deck,
                      title: `rand title ${Math.random()}`,
                    })
                  }
                >
                  Update
                </button>
                <button onClick={() => deleteDeck(deck.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
};

export default Decks;

export const getServerSideProps: GetServerSideProps = async () => {
  const { data: initDecks } = await getDecks();

  return {
    props: { initDecks },
  };
};
