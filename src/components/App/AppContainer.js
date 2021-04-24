import {connect} from 'react-redux';
import App from './App';
import {getListsForApp, createActionAddList} from '../../redux/listRedux.js';

const mapStateToProps = (state)=>({
  lists: getListsForApp(state),
});

const mapDispatchToProps = (dispatch) => ({
  addList: title => dispatch(createActionAddList({
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);