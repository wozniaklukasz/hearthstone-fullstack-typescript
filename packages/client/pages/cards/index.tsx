import React from 'react';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { GetCardDto } from 'commons/lib/dtos';
import Layout from 'layout';
import { getCards } from 'api';

interface Props {
  cards: GetCardDto[];
}

const Cards: React.FC<Props> = ({ cards }) => {
  return (
    <Layout title="Cards">
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>cardClass</th>
            <th>type</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {cards.map((card) => (
            <tr key={card.id}>
              <td>{card.name}</td>
              <td>{card.cardClass}</td>
              <td>{card.type}</td>
              <td>
                <Link href={`/cards/${card.id}`}>
                  <button>Link</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
};

export default Cards;

export const getStaticProps: GetStaticProps = async () => {
  const { data: cards } = await getCards();

  return {
    props: { cards },
  };
};
