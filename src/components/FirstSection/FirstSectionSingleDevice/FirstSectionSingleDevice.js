import React from 'react';
import { Card } from 'react-bootstrap';
import '../FirstSectionSingleDevice/FirstSectionSingleDevice.css';

const FirstSectionSingleDevice = ({firstSectionSingleDevice}) => {
    const {img, name, about} = firstSectionSingleDevice;
    return (
        <div className='g-4 col-sm-12 col-md-6 col-lg-4 text-center mx-auto'>
            <Card className='border-2 shadow' style={{ width: '21rem' }}>
                <Card.Img variant="top" src={img} width={100} height={250} />
                <Card.Body className='card-text'>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {about}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default FirstSectionSingleDevice;