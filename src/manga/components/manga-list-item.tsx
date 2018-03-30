import React, { Component } from 'react';

export default class MangaListItem extends Component {
  
  renderItem() {
    return (
      <li>
        <h3>Name</h3>
        <p>Status</p>
        <p>Progress</p>
      </li>
    );
  }
  
  render() {
    return (
      this.renderItem
    );
  }
}