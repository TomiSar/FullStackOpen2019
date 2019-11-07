import React from 'react';

const FilterCountry = ({ filter, addFilter }) => {
    return (
        <div>
            <input value={filter} onChange={addFilter} />
        </div>
    )
}

export default FilterCountry;