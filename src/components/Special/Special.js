import React, { useContext } from 'react';
import { HouseContext, RingContext } from '../GrandPa/GrandPa';

const Special = ({ gift }) => {

    const ring = useContext(RingContext)
    const [house, setHouse] = useContext(HouseContext)

    const handleBuyAHouse = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount)
    }

    return (
        <div>
            <h4>Special</h4>
            <h5>Gift: {ring}</h5>
            <h6>House: {house}</h6>
            <button onClick={handleBuyAHouse}>Buy A House</button>
        </div>
    );
};

export default Special;