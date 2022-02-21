import React from 'react';
import { SampleImages } from './ServiceStyle';

function SampleServices(props) {
    return (
        <>
            <SampleImages to={props.path}>
                <img 
                    src={props.images} 
                    alt="service" 
                />
                
                <p>{props.text}</p>
            </SampleImages>
        </>
    )
}

export default SampleServices;
