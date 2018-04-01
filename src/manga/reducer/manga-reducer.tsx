import _ from 'lodash';

import MangaActionTypes from '../actions/manga-actions-types';

export default (state = [], action) => {
  switch(action.type) {
    case MangaActionTypes.FETCH_ALL_MANGAS:
      return { ...state, mangas: action.data };
    default:
      return state;
  }
};