import React from 'react';
import { GetServerSideProps } from 'next';
import Layout from '../../layout/Layout';
import { GetDeckDto } from '../../dto';
import { createDeck, deleteDeck, getDecks, updateDeck } from '../../api/endpoints/decks';
import Link from 'next/link';

interface Props {
  decks: GetDeckDto[];
}

const Decks: React.FC<Props> = ({ decks }) => {
  return (
    <Layout title="Decks">
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
  const { data: decks } = await getDecks();

  return {
    props: { decks }, // will be passed to the page component as props
  };
};
