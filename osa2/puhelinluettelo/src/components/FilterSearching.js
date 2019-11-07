import React from 'react';

const FilterSearching = ({ filter, addFiltering }) => {
    return (
        <div>
            filters shown with <input value={filter} onChange={addFiltering} />
        </div>
    )
}

export default FilterSearching;