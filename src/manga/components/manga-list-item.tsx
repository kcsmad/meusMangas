import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class MangaListItem extends Component {
  static propTypes = {
    manga: PropTypes.shape({
      name: PropTypes.string,
      status: PropTypes.string,
      progress: PropTypes.string,
    }),
  };
  
  renderItem(manga) {
    return (
      <li>
        <h3>{manga.name}</h3>
        <p>{manga.status}</p>
        <p>{manga.progress}</p>
      </li>
    );
  }
  
  render() {

    const { manga } = this.props;

    return (
      this.renderItem(manga)
    );
  }
}

export default connect(
  state => ({ manga: state.manga }),
  null,
)(MangaListItem);