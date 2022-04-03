import React, { useState } from 'react';
import './GrandPa.css'
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';

const GrandPa = () => {

    const [house, setHouse] = useState(1)

    const handleBuyAHouse = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount);
    }

    const gift = 'Diamond Ring'


    return (
        <div className='grandpa'>
            <h1>Grandpa</h1>
            <p>House: {house}
                <button onClick={handleBuyAHouse} style={{ marginLeft: '15px' }}>Buy A house</button>
            </p>
            <div style={{ display: 'flex' }}>
                <Father house={house} gift={gift}></Father>
                <Uncle house={house}></Uncle>
                <Aunty house={house}></Aunty>
            </div>
        </div >

    );
};

export default GrandPa; <h1>Grandpa</h1>