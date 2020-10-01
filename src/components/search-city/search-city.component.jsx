import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {
    SearchBar,
    SearchInput,
    SearchIcon
} from './search-city.styles.jsx';

const SearchCity = ({ submit, value, change, showResult }) => {
    return (
        <>
            <SearchBar showResult={showResult} onSubmit={submit}>
                <SearchInput type="text" value={value} placeholder="Enter city" onChange={change}/>
                <SearchIcon>
                    <FontAwesomeIcon icon={faSearch} />
                </SearchIcon>
            </SearchBar>
        </>
    );
};

SearchCity.propTypes = {
    submit: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    change: PropTypes.func.isRequired,
    showResult: PropTypes.bool.isRequired,
};

export default SearchCity;