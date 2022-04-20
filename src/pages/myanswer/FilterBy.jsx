import React from 'react';
import './myanswer.css'

const FilterBy = ({children, ...props}) => {
    return (
        <div className='filter_button'>
            <button onClick={props.onClick}>{children}</button>

        </div>
    );
};

export default FilterBy;