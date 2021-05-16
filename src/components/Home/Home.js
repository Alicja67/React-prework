import React from 'react';
import styles from './Home.scss';
import PropTypes from 'prop-types';
import Creator from '../Creator/Creator.js';
import {settings} from '../../data/dataStore';
import ListLink from '../ListLink/ListLink';


class Home extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    description: PropTypes.string,
    addList: PropTypes.func,
    lists: PropTypes.array,
  }

  render() {
    const {title, subtitle, addList, lists} = this.props;
    
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        <div className={styles.creator}>
          <div>
            {lists.map(listData => (
              <ListLink key={listData.id} {...listData} />
            ))}
          </div>
          <Creator text={settings.listCreatorText} action={addList} />
        </div>
      </main>
    );
  }
}

export default Home;
