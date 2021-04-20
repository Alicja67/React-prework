import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

const Card = props => (
  <section className={styles.component}>
    <h3>{props.title}</h3>
  </section>
);

Card.propTypes = {
  title: PropTypes.string,
};

export default Card;