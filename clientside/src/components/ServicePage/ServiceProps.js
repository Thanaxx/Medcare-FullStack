import React from 'react'
import { SampleImages } from './ServicespageStyle';

function ServiceProps(props) {
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

export default ServiceProps