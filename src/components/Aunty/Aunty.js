import React, { useContext } from 'react';
import { RingContext } from '../GrandPa/GrandPa';

const Aunty = ({ house }) => {

    const ornament = useContext(RingContext);

    return (
        <div>
            <h4>Aunty</h4>
            <p>House: {house}</p>
            <p>Ornament: {ornament}</p>
        </div>
    );
};

export default Aunty;