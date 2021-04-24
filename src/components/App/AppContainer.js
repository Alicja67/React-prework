import {connect} from 'react-redux';
import App from './App';
import {getListsForApp, createActionAddList} from '../../redux/listRedux.js';

const mapStateToProps = (state, props)=>({
  lists: getListsForApp(state, props.id),
});

// const mapStateToProps = state => ({
//   title: state.app.title,
//   subtitle: state.app.subtitle,
//   lists: state.lists,
// });

const mapDispatchToProps = (dispatch, props) => ({
  addList: title => dispatch(createActionAddList({
    appId: props.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);