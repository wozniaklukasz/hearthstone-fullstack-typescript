import React from 'react';
import { GetServerSideProps } from 'next';
import Layout from '../../layout/Layout';
import { GetDeckDto } from '../../dto';
import { getDecks } from '../../api/endpoints/decks';

interface Props {
  decks: GetDeckDto[];
}

const Decks: React.FC<Props> = ({ decks }) => {
  return (
    <Layout title="Decks">
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
                <a href={`/decks/${deck.id}`}>Link</a>
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
