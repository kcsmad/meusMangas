import MangaActionTypes from './manga-actions-types';

export const getMangas = () => (
  {
    type: MangaActionTypes.FETCH_ALL_MANGAS,
  }
);

export const setMangasList = data => (
  {
    type: MangaActionTypes.RECEIVED_MANGAS_LIST,
    mangas: data
  }
);


export default {
  getMangas,
}