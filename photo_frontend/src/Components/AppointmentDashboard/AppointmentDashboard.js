import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Row, Col } from 'react-bootstrap';
import {  handleAppointments } from '../../store/actions';
import Calendar from 'react-calendar';
import './AppointmentDashboard.css';

// FOR RETURNING CLIENTS!!!

function AppointmentDashboard(){

    const appointments = useSelector(state=>state.appointments)
    const dispatch = useDispatch()
  if(!appointments.isLoaded){
    dispatch(handleAppointments)
}

    return(
        <div className='mainContainer'>
        <div>
            <Row style={{ marginLeft: 0, marginRight: 0 }}>
                    <Col style={{ paddingLeft: 0, paddingRight: 0 }}> 
                        <div className='AppointTitle' > 

                                <h1 className='titleStyle'> Here Are Your Appointments </h1> 

                        </div>   
                    </Col>
            </Row>
            <Row style={{ marginLeft: 0, marginRight: 0 }}>
                <Col style={{ marginLeft: 0, marginRight: 0 }}>
                    <div className='AppointInfo'>
                            <Calendar />
                    </div>
                </Col>
            </Row>
        </div>
        </div>
    )
}


export default AppointmentDashboard;