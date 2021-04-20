import React from 'react';
import styles from './App.scss';
import List from '../List/ListContainer';
import PropTypes from 'prop-types';
// import Creator from '../Creator/Creator.js';


class App extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    description: PropTypes.string,
    lists: PropTypes.array,
  }

  // addList(title){
  //   this.setState(state => (
  //     {
  //       lists: [
  //         ...state.lists,
  //         {
  //           key: state.lists.length ? state.lists[state.lists.length-1].key+1 : 0,
  //           title,
  //           columns: [],
  //           image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  //           description: 'Life is beautiful',
  //         },
  //       ],
  //     }
  //   ));
  // }
  
  render() {
    const {title, subtitle, lists} = this.props;
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        {lists.map(listData => (
          <List key={listData.id} {...listData} />
        ))}
        {/* <div>{lists.map(listData => (
          <List key={listData.id} {...listData} />
        ))}</div> */}
        {/* <div className={styles.creator}>
          <Creator text={settings.listCreatorText} action={title => this.addList(title)} />
        </div> */}
      </main>
    );
  }
}

export default App;
