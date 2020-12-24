import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {  Row, Col } from 'react-bootstrap';
import {  handleAppointments } from '../../store/actions';
import Display from '../Display/Display';
import './AppointmentDashboard.css';

// FOR RETURNING CLIENTS!!!

function AppointmentDashboard(props){
    const appointments = useSelector(state => state.appointments)
    const dispatch = useDispatch()

    if(!appointments.isLoaded){
    dispatch(handleAppointments)
    }

    return(
        <div className='mainContainer'> 
            <Row style={{ marginLeft: 0, marginRight: 0 }}>
                    <Col style={{ paddingLeft: 0, paddingRight: 0 }}> 
                        <div className='AppointTitle' > 
                                <h1 className='titleStyle'> Here Are Your Appointments! </h1> 
                        </div>   
                    </Col>
            </Row>
            
            <Row style={{ marginLeft: 0, marginRight: 0 }}>
                <Col style={{ marginLeft: 0, marginRight: 0 }}>
                  <div>
                        {appointments.appointments.map( appointment => 
                        
                        appointment.client_id == localStorage.id
                        ?  <Display 
                        key={appointment.id}
                        id={appointment.id}
                        client={appointment.client_id}
                        client_name={appointment.client.name}
                        photographer={appointment.photographer_id}
                        photographer_name={appointment.photographer.name}
                        time={appointment.time}
                        />
                        : null
                         )}
                        
                    </div>   
                </Col>
            </Row>

           <div className='buttonContainer'>
                    <button  onClick={()=> { localStorage.clear()
                                        props.history.push('/home_page') }}>
                        LOG OUT?
                    </button>
              
                <br></br>
             
                    <button  onClick={ () => props.history.push('/client_dashboard')}>
                        ANOTHER APPOINTMENT? 
                    </button>
                
                <br></br>
           </div> {/* this DIV closes buttons*/}
        </div> 
    ) // closes return
}; // closes class


export default AppointmentDashboard;