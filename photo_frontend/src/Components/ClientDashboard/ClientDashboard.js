import  React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {  Row, Col } from 'react-bootstrap';
import Photographers from './Photographers/Photographers'
import { handlePhotographers } from '../../store/actions';
import './ClientDashboard.css';

function ClientDashboard(props){
    
    console.log(props, 'this is the client dashboard')
    const photographers = useSelector(state => state.photographers) // calls from the reducer index where we assigned the
                                                                    // photographer property which leads the photographer reducer
                                                                    // which then leads to the actions folder
    const dispatch = useDispatch()
    if(!photographers.isLoaded){
        dispatch(handlePhotographers)
    }

    return(
<div className='mainContainer'>
            <Row style={{ marginLeft: 0, marginRight: 0 }}>
                    <Col style={{ paddingLeft: 0, paddingRight: 0 }}> 
                        <div className='title' > 
                                <h1 style={{color: 'white'}}> Choose Your Photographer! </h1> 
                        </div>   
                    </Col>
            </Row>

            <Row style={{ paddingLeft: 0, paddingRight: 0 }}>
                    <Col style={{ paddingLeft: 0, paddingRight: 0 }}>
                        <div >  
                            {photographers.photographers.map( photographer => 
                            
                            <Photographers 
                            key={photographer.id}
                            id={photographer.id}
                            name={photographer.name}
                            pic={photographer.profile_pic_url}
                            bio={photographer.bio_quote}
                            experiance={photographer.experiance}
                            email={photographer.email}
                            phone={photographer.phone_number}
                            special={photographer.specialty}
                            history={props.history}
                            />
                            )}
                        </div>
                    </Col>
            </Row>
</div>
    )
};

export default ClientDashboard;
