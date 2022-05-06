import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile, faLaptop, faHeadphones, faWarehouse, faPen } from '@fortawesome/free-solid-svg-icons'
import { ProgressBar } from 'react-bootstrap';
import '../SecondSection/SecondSection.css'

const SecondSection = () => {
    return (
        <div className='w-50 mx-auto mt-5 mb-5 text-color'>
            <h2 className='text-center main-head my-4'>WareHouse Products Storage Ratio <FontAwesomeIcon icon={faWarehouse}></FontAwesomeIcon></h2>
            <h4>iPhones <FontAwesomeIcon icon={faMobile}></FontAwesomeIcon></h4>
            <ProgressBar className='my-3' variant='primary' aria-valuemax={100} aria-valuemin={0} animated now={90} label={`${90}%`}/>
            <h4>AirPods <FontAwesomeIcon icon={faHeadphones}></FontAwesomeIcon></h4>
            <ProgressBar className='my-3' variant='info' aria-valuemax={100} aria-valuemin={0} animated now={65} label={`${65}%`}/>
            <h4>MacBooks <FontAwesomeIcon icon={faLaptop}></FontAwesomeIcon></h4>
            <ProgressBar className='my-3' variant='success' aria-valuemax={100} aria-valuemin={0} animated now={75} label={`${75}%`}/>
            <h4>iPencil <FontAwesomeIcon icon={faPen}></FontAwesomeIcon></h4>
            <ProgressBar className='my-3' variant='warning' aria-valuemax={100} aria-valuemin={0} animated now={80} label={`${80}%`}/>
            <h4>iPods <FontAwesomeIcon icon={faMobile}></FontAwesomeIcon></h4>
            <ProgressBar className='my-3' variant='danger' aria-valuemax={100} aria-valuemin={0} animated now={45} label={`${45}%`}/>
        </div>
    );
};

export default SecondSection;