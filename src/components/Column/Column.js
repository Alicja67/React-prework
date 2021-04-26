import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import Icon from '../Icon/Icon.js';
import {settings} from '../../data/dataStore';
import Creator from '../Creator/Creator.js';
import {Droppable} from 'react-beautiful-dnd';

const Column = ({title, icon, cards, addCard, id}) => {
  return (
    <section className={styles.component}>
      <h3 className={styles.title}>{title}
        <span className={styles.icon}>
          <Icon name={icon} />
        </span>
      </h3>
      <Droppable droppableId={id}>
        {provided => (
          <div 
            className={styles.cards}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {cards.map(cardData => (
              <Card key={cardData.id} {...cardData} />
            ))}

            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <div className={styles.creator}>
        <Creator text={settings.cardCreatorText} action={addCard}/>
      </div>
    </section>
  );
};

Column.propTypes = {
  title: PropTypes.string.isRequired,
  cards: PropTypes.array,
  icon: PropTypes.string,
  addCard: PropTypes.func,
  id: PropTypes.string,
};

Column.defaultProps = {
  icon: settings.defaultColumnIcon,
};

export default Column;