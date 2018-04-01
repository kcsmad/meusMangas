import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {MangaListItem} from "./manga-list-item";


export class MangaList extends Component {
  static propTypes = {
   mangas: PropTypes.shape().isRequired,
  };


  get mangaItems() {
    return mangas.map(manga => return <MangaListItem  />)
  }

  render() {
    return(
      <section class="manga-list">
        <ul>
          <MangaListItem />
        </ul>
      </section>
    );
  }
}


export default connect(
  state => ({ mangas: state.mangas }),
  null,
)(MangaList);
