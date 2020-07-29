import React from 'react';
import './SearchBox.css';



export const SearchBox = ({placeholder, searchChange}) => {
    return(
        <input 
            onChange={searchChange} 
            className="search-box" 
            type="search" 
            placeholder={placeholder}
        />
    ) 
}