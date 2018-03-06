import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  render() {
    return (
      <div className='search-bar'>
      <form>
        <input type="text" placeholder='Search Your Destinxy' />
      </form>
      </div>
    );
  }
}

export default SearchBar;

/*
FilterableProductTable = App = searchbar + card
SearchBar
ProductTable = card
- ProductCategoryRow = first subfield
- ProductRow = sub-subfield




*/