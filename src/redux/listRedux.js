import shortid from 'shortid';

// selectors
export const getListsForApp = ({lists}, appId) => lists.filter(list => list.appId == appId);

// action name creator
const reducerName = 'lists';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const ADD_LIST = createActionName('ADD_LIST');

// action creators
export const createActionAddList = payload => ({ payload: { ...payload, id: shortid.generate(), image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png' }, type: ADD_LIST });

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_LIST:
      return [...statePart, action.payload];
    default:
      return statePart;
  }
}