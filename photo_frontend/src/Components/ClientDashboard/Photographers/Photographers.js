import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {  handlePhotos } from '../../../store/actions';
import { Figure } from 'react-bootstrap';
import Photos from '../Photos/Photos';
import './Photographers.css';






function Photographers(props){

  const photos = useSelector(state => state.photos)
  const dispatch = useDispatch()
  if(!photos.isLoaded){
    dispatch(handlePhotos)
}
    return(
        <div className='photoCon'>
            {/* this here is a photographer */}

             <div>
        <h1> {props.name} </h1>
            </div>
            <Figure>
  <Figure.Image
    // width={200}
    // height={300}
    alt={props.name}
    src={props.pic}
    
  />
  </Figure>
  {/* <Figure.Caption>
    Name: {props.name}{console.log(props.name)}
  </Figure.Caption> */}
        <div className='info'>
          <h3>
            <div>
            Catchphrase? : {props.bio}
            </div>

            <div>
            Specialty? : {props.special}
            </div>

            Experiance : {props.experiance}
          </h3>


        </div>
        {photos.photos.map( photo => <Photos
                  key={photo.id}
                  photographer_id={photo.photographer_id}
                  url={photo.url}
                            />)}
        </div>
        
    )

    
};

export default Photographers;