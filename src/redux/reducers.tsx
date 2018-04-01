import { combineReducers } from 'redux';

import { mangaReducer } from '../manga/reducer/manga-reducer';

export const rootReducer = combineReducers({
  mangas: mangaReducer,
});

export default {
  rootReducer,
};
