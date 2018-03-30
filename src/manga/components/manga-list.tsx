import React, {Component} from 'react';
import { connect } from 'react-redux';


export default class MangaList extends Component {
  
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
