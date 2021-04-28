import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {infoContents} from '../../data/dataStore';
import PropTypes from 'prop-types';
import styles from './Info.scss';

const Info = () => {  
  return (
    <Container>
      <div className={styles.component}>
        <Hero titleText={infoContents.header} imageSrc={infoContents.image} />
        <h2 className={styles.title}>{infoContents.title}</h2>
        <div className={styles.description}>{infoContents.description.map(data => <p key={data.id}>{data.text}</p>)}</div>
      </div>
    </Container>
  );
};

Info.propTypes = {
  header: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.array,
};

export default Info;