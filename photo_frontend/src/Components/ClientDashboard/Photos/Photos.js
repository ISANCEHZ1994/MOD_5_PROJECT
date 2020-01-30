import React, { useState } from 'react';
import { useSelector, } from 'react-redux';
import { Carousel } from 'react-bootstrap';
// import {  handlePhotos, selectPhotographer } from '../../../store/actions';
// import { useSelector, useDispatch } from 'react-redux';


function Photos(props){

    const photographers = useSelector(state => state.photographers)
    const photographerArray = photographers.photographers.filter( photographer => {
       return photographer.id
    })
    
    console.log(photographerArray)
    // console.log(props.id)
    

    return(
        <div className='photos'>
            {/* <div className='photo'>
                <img src={props.url} alt="photographer's photos"/> 
            </div> */}
        <Carousel>
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


        </div>
       
    )
}

export default Photos;