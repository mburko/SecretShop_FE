import React from 'react';
import './author.css'

const Author = (author) => {
    return (
        <div className='author'>
            <div className='author__logo'>
                <img src={author.logo}
                     alt='logo'
                     width="50"
                     height="50"
                />
            </div>
            <div className='author__name'>
                {author.name}
            </div>
        </div>
    );
};

export default Author;