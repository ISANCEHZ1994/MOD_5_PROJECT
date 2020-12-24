import React from 'react';
import { useSelector, } from 'react-redux';
import { Carousel } from 'react-bootstrap';

function Photos(props){

    const photographers = useSelector(state => state.photographers);
    
    const photographerArray = photographers.photographers.filter( photographer => {
       return photographer.id
    });

    return(
        <Carousel className='photos'>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={props.url}
                    alt="photographer's photos"
                    />
                    <Carousel.Caption>
                    <h3></h3>
                    <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
        </Carousel>
    )
}

export default Photos;