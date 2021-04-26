import {connect} from 'react-redux';
import App from './App';
import {getListsForApp, createActionAddList} from '../../redux/listRedux.js';
import {createAction_moveCard} from '../../redux/cardRedux';

const mapStateToProps = (state)=>({
  lists: getListsForApp(state),
});

const mapDispatchToProps = (dispatch) => ({
  addList: title => dispatch(createActionAddList({
    title,
  })),
  moveCard: payload => dispatch(createAction_moveCard({
    payload,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);