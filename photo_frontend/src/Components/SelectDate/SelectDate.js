import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {  Row, Col } from 'react-bootstrap';
// import {  createAppointment } from '../../store/actions';
import Calendar from 'react-calendar';

// FOR NEW CLIENTS


// class SelectDate extends React.Component{


   

//     render(){

//         const selectedPhotographer = useSelector( state => state.photographers.selectedPhotographer )
//         //     const dispatch = useDispatch()
//         return(
//             <div className='mainContainer'>
//          <div>
            
//              <Row style={{ marginLeft: 0, marginRight: 0 }}>
                
//                      <Col style={{ paddingLeft: 0, paddingRight: 0 }}> 
//                          <div className='AppointTitle' > 

//                                  <h1 className='titleStyle'> Select A Day </h1> 

//                          </div>   
//                      </Col>
//              </Row>
           
//              <Row style={{ marginLeft: 0, marginRight: 0 }}>
//                  <Col style={{ marginLeft: 0, marginRight: 0 }}>
//                      <div className='AppointInfo'>
//                              <Calendar  minDate/>
//                      </div>

//                      <div> 
//                          {console.log(selectedPhotographer)}
//                          <h1>{selectedPhotographer.name}</h1>
//                      </div>
//                  </Col>
//              </Row>
//              <br>

//              </br>
//              <br>

//              </br>
//          </div>
//          </div>
//         )
//     }
// }
function SelectDate(){

    const selectedPhotographer = useSelector( state => state.photographers.selectedPhotographer )
    // const dispatch = useDispatch()
    
    return(
        <div className='mainContainer'>
        <div>
            
            <Row style={{ marginLeft: 0, marginRight: 0 }}>
                
                    <Col style={{ paddingLeft: 0, paddingRight: 0 }}> 
                        <div className='AppointTitle' > 

                                <h1 className='titleStyle'> Select A Day </h1> 

                        </div>   
                    </Col>
            </Row>
           
            <Row style={{ marginLeft: 0, marginRight: 0 }}>
                <Col style={{ marginLeft: 0, marginRight: 0 }}>
                    <div className='AppointInfo'>
                            <Calendar onClickDay = {(e)=> test(e)} />
                    </div>

                    <div> 
                        {console.log(selectedPhotographer)}
                        <h1>{selectedPhotographer.name}</h1>
                    </div>
                </Col>
            </Row>`1`
            <br>

            </br>
            <br>

            </br>
        </div>
        </div>
    )
};
  const test = (e) =>{
                        // console.log('does this work')
                        console.log('day has been clicked', e.getDate(), 'this is the id', localStorage.id)
                        
                    }

export default SelectDate;