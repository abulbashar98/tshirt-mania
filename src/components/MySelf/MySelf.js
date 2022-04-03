import React from 'react';
import Special from '../Special/Special';

const MySelf = ({ house, gift }) => {
    return (
        <div>
            <h4>MySelf</h4>
            <p>House: {house}</p>
            <Special gift={gift}></Special>
        </div>
    );
};

export default MySelf;