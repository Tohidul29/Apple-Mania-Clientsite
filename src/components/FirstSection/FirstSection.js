import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import '../FirstSection/FirstSection.css'
import FirstSectionSingleDevice from './FirstSectionSingleDevice/FirstSectionSingleDevice';

const FirstSection = () => {
    const [rareDevices, setRareDevices] = useState([]);
    useEffect(()=>{
        fetch('rare-device-data.json')
        .then(res => res.json())
        .then(data => setRareDevices(data))
    },[])
    return (
        <div>
            <h2 className='header-text text-center mt-5'>Rare Devices We Have <FontAwesomeIcon icon={faEye}></FontAwesomeIcon></h2>
            <div className='row container mx-auto my-5'>
                {
                    rareDevices.map(firstSectionSingleDevice => <FirstSectionSingleDevice
                        key={firstSectionSingleDevice.id}
                        firstSectionSingleDevice={firstSectionSingleDevice}
                    >
                    </FirstSectionSingleDevice>)
                }
            </div>
        </div>
    );
};

export default FirstSection;