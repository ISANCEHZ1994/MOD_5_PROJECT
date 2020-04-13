import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {  handlePhotos, selectPhotographer } from '../../../store/actions';
import { Figure } from 'react-bootstrap';
import Photos from '../Photos/Photos';
import './Photographers.css';


function Photographers(props){

  const photos = useSelector(state => state.photos)

  const f = photos.photos.filter( photo => {
   return photo.photographer_id == props.id
  })

  
  const dispatch = useDispatch()
  if(!photos.isLoaded){
    dispatch(handlePhotos)
}

    return(
        <div className='photoCon'>
            {/* this here is a photographer */}
             <div >
        <h1> {props.name} </h1>
            </div>
            <br></br>
            
            <center>
                <Figure>
                  <Figure.Image
                    className='zoom'
                    alt={props.name}
                    src={props.pic}
                    onClick={()=>{ 
                      dispatch( selectPhotographer(props) )
                      props.history.push('/select_date')
                    }}
                  />
              </Figure>
            </center>
    <br></br>
        <div className='info'>

          <h3 >
            <div>
            Catchphrase? : {props.bio}
            </div>

            <div>
            Specialty? : {props.special}
            </div>

            Experiance : {props.experiance}
          </h3>

        </div>

        <div>
        <h1>Here are just some of my favorite shots!</h1>
        </div>

        {f.map( photo => 
                  <Photos
                  key={photo.id}
                  id={photo.id}
                  photographer_id={photo.photographer_id}
                  url={photo.url}
                  />
        )}
        <br></br>
        </div>
    )
};

export default Photographers;