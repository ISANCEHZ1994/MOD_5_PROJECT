import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {  Row, Col } from 'react-bootstrap';
// import {  createAppointment } from '../../store/actions';
import './SelectDate.css';
import TimeMenu from './TimeMenu';
import Calendar from 'react-calendar';

function SelectDate(props){

    // console.log(props.history)
    // debugger
    

    const selectedPhotographer = useSelector( state => state.photographers.selectedPhotographer )
    
    // const dispatch = useDispatch()

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [day, setDay] = useState('');
    const handleSetDay= (day) => setDay(day);

    
    const test = (e) =>{
        // console.log('day has been clicked', e.getDate(), 'this is the id', localStorage.id)
        handleShow()
        handleSetDay(e.getDate())
    }

    //BEHOLD USING INVERSE DATA FLOW you slow fuck
    const functionFromParent = (time) =>{

        // Here I want to start using this data to save a date on the calandar
        console.log('proving a point', time, day, localStorage.id)

    }
    
    return(
    <div className='mainContainer'>
        <div>
            
            <Row style={{ marginLeft: 0, marginRight: 0 }}> {/* First Row*/}
                
                    <Col style={{ paddingLeft: 0, paddingRight: 0 }}> 
                        <div className='AppointTitle' > 

                                <h1 className='titleStyle'> Select A Day </h1> 

                        </div>   
                    </Col>
            </Row>
           
                <Row style={{ marginLeft: 0, marginRight: 0 }}> {/* Second Row*/}
                    <Col style={{ marginLeft: 0, marginRight: 0 }}>
                        <div className='AppointInfo'>
                                <Calendar onClickDay = {(e) => test(e)}/>
                                
                               { show === true ? <div className='timeBox'>
                                    <TimeMenu 
                                    show={show}
                                    onHide={()=> handleClose()}
                                    functionAsProps = {functionFromParent}
                                    day={day}
                                    photographerName={selectedPhotographer.name}
                                    selectedPhotographer={selectedPhotographer}
                                    history={props.history}
                                    />
                                </div> : null}
                        </div>
                        
                    </Col>

                    <Col>
                        <br></br>

                            <div className='photographerInfo'> 
                                <h1> You have chosen {selectedPhotographer.name} to be your photographer! </h1>
                            </div>

                         <br></br>

                            <div className='clientInfo'>
                                <h1> Your ID number is {localStorage.id} </h1> 
                            </div>

                     </Col>
                </Row>
            
            <Row style={{ marginLeft: 0, marginRight: 0 }}> {/* Third Row*/}
                    <Col style={{ marginLeft: 0, marginRight: 0 }}>
                        <div>
                            
                        </div>
                    </Col>
            </Row>
            
        </div>
    </div>
    )
};
//   const date = (e) => {
                
//   }

//   const test = (e) =>{
//                         // console.log('does this work')
//                         console.log('day has been clicked', e.getDate(), 'this is the id', localStorage.id)
//                         handleShow()
//                         console.log('this is my show State', show)
//                     }

// FOR NEW CLIENTS

// class SelectDate extends React.Component{
//     render(){
    //return(
            // <div>
            //   just incase
            // </div>
    // )
// }
//}

export default SelectDate;