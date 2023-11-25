/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './SearchBar.css'

const SearchBar = () => {

    const [query, setQuery] = useState("")

    function search(e){
        e.preventDefault()
        setQuery(e.target.value)
    }

    return (
        <div className='srch-txt'>
            <div className="searchBar">
            <input
                type="text"
                className="search"
                placeholder="Search Anything.."
                onChange={search}
                value={query}
            />
            <i className='fa-solid fa-search' id='searchIcon'></i>
        </div>
        </div>
    );
};

export default SearchBar;