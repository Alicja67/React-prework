import React from 'react';
import styles from './SearchResult.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import Container from '../Container/Container';

const SearchResult = ({title, cards}) => {
  return (
    <Container>
      <section className={styles.component}>
        <h3 className={styles.title}>{title}</h3>
        <div>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>
      </section>
    </Container>
  );
};

SearchResult.propTypes = {
  title: PropTypes.string,
  cards: PropTypes.array,
};

export default SearchResult;