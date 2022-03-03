import { combineReducers } from 'redux';

import { SET_FILTER, SET_MOVIES, SET_USER} from '../actions/actions';

function visibilityFilter(state = '', action) {
  switch (action.type) {
    case SET_FILTER:
      return action.payload;
    default:
      return state;
  }
}

function movies(state = [], action) {
  switch (action.type) {
    case SET_MOVIES:
      console.log('SET_MOVIEreducer reached');
      return action.payload;
    default:
      return state;
  }
}

function user(state = '', action) {
    switch (action.type) {
      case SET_USER:
        console.log('SET_USER reducer reached');
        return action.payload;
      default:
        return state;
    }
  }

const moviesApp = combineReducers({
  visibilityFilter,
  movies,
  user
});

export default moviesApp;