import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';
// import {Draggable} from 'react-beautiful-dnd';


// const Card = ({title, id, index}) => {
//   return (
//     <Draggable draggableId={id} index={index}>
//       {(provided) => (
//         <article
//           className={styles.component}
//           {...provided.draggableProps}
//           {...provided.dragHandleProps}
//           ref={provided.innerRef}
//         >
//           {title}
//         </article>
//       )}
//     </Draggable>
//   );
// };
const Card = ({title}) => (
  <div className={styles.component}>
    <h3>{title}</h3>
  </div>
);

Card.propTypes = {
  title: PropTypes.string,
  // id: PropTypes.string,
  // index: PropTypes.number,
};

export default Card;