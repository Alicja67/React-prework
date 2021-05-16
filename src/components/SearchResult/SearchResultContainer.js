import { connect } from 'react-redux';
import SearchResult from './SearchResult';
import { getCardsForSearching } from '../../redux/cardRedux.js';

const mapStateToProps = (state, props) => ({
  cards: getCardsForSearching(state, props.match.params.title),
});

export default connect(mapStateToProps)(SearchResult);
