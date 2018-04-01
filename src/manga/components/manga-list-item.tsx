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
  
  renderItem() {
    return (
      <li>
        <h3>{this.props.manga.name}</h3>
        <p>{this.props.manga.status}</p>
        <p>{this.props.manga.progress}</p>
      </li>
    );
  }
  
  render() {
    return (
      this.renderItem
    );
  }
}

export default connect(
  state => ({ manga: state.manga }),
  null,
);