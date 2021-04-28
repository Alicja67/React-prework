import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import {FAQContents} from '../../data/dataStore';
import styles from './FAQ.scss';

const FAQ = () => (
  <Container>
    <div className={styles.component}>
      <Hero titleText={FAQContents.header} imageSrc={FAQContents.image} />
      <h2 className={styles.title}>{FAQContents.title}</h2>
      <div>
        <ul>{FAQContents.questions.map(question => 
          <li className={styles.list} key={question.id}>
            <ul>
              <li>{question.q}</li>
              <li>{question.a}</li>
            </ul>
          </li>)}
        </ul>
      </div>
    </div>
  </Container>
);

FAQ.propTypes = {
  header: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
  questions: PropTypes.array,
};

export default FAQ;