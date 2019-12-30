import  React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Row, Col } from 'react-bootstrap';
import Photographers from './Photographers/Photographers'
// import Photos from './Photos/Photos';
import { handlePhotographers } from '../../store/actions';
import './ClientDashboard.css';



function ClientDashboard(){

    // state = {
    //     photographers: []
    // }

    const photographers = useSelector(state => state.photographers)
    // const photos = useSelector(state => state.photos)
    // const addresses = useSelector(state => state.addresses)

    const dispatch = useDispatch()
    if(!photographers.isLoaded){
        dispatch(handlePhotographers)
    }
    // if(!photos.isLoaded){
    //     dispatch(handlePhotos)
    // }
    // function getPhotographers(){

    //     return dispatch => {

    //     }
    // }

    // useEffect( () => {
    //     fetch( 'http://localhost:3000/photographers' )
    //     .then( resp => resp.json() )
    //     .then( photographers => {
    //         this.setState({
    //             photographers: photographers
    //         })
    //     })
    // })


    return(
<div className='mainContainer'>
        <div>
            <Row style={{ marginLeft: 0, marginRight: 0 }}>
                    <Col style={{ paddingLeft: 0, paddingRight: 0 }}> 
                        <div className='title' > 

                                <h1 style={{color: 'white'}}> Choose Your Photographer! </h1> 

                        </div>   
                    </Col>
            </Row>

            <Row style={{ paddingLeft: 0, paddingRight: 0 }}>
                    <Col style={{ paddingLeft: 0, paddingRight: 0 }}>
                        <div>
                            {photographers.photographers.map( photographer => <Photographers 
                            key={photographer.id}
                            name={photographer.name}
                            pic={photographer.profile_pic_url}
                            bio={photographer.bio_quote}
                            experiance={photographer.experiance}
                            email={photographer.email}
                            phone={photographer.phone_number}
                            special={photographer.specialty}

                            />)}
                        </div>

                        <div>
                            {/* {photos.photos.map( photo => <Photos
                                key={photo.id}
                            />)} */}
                        </div>
                    </Col>
            </Row>

        </div>
</div>
    )
};

export default ClientDashboard;
