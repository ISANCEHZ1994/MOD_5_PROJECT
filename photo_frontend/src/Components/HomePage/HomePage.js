import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
import SignUpModal from '../SignUpModal';
import LoginModal from '../LoginModal';
import { Button, Row, Col } from 'react-bootstrap';
import './HomePage.css'

function HomePage(props) {

//    console.log(props.history)
//    debugger
    //for modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show2,setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    // const appointments = useSelector(state => state.appointments)//calls from the reducer index where we assigned the apponitment property which leads the appointment reducer
    // // reducer folder / index --> appointmentReducer.js
    // const clients = useSelector(state => state.clients)
    // const photographers = useSelector(state => state.photographers)
    // const photos = useSelector(state => state.photos)
    // const addresses = useSelector(state => state.addresses

    return (
  
        <div className='mainContainer'>
           
            <div >
                
                <Row style={{ marginLeft: 0, marginRight: 0 }}>
                    <Col style={{ paddingLeft: 0, paddingRight: 0 }}> 
                        <div className='header'>

                            <div className='headerDetail'>
                        <h1 > Welcome To Your Snap! </h1> 
                            </div>
                            
                        </div>   
                    </Col>
                </Row>

                <Row className ='rowParent' style={{ marginLeft: 0, marginRight: 0 }}>
                    <Col style={{ paddingLeft: 0, paddingRight: 0 }}> 
                   <div  className='mystyle'  >
                       
                            <div className='innerBoarder'>   
                    Here at Your Snap we strive to make any day beautiful and perfect.
                            </div>

                   </div>
                    </Col>

                    <Col style={{ paddingLeft: 0, paddingRight: 0 }}> 
                    
                        <img className= 'imgTest' src={'https://cdn.mos.cms.futurecdn.net/HfpNyWo7Um89DknAYnoRcN.jpg'} alt={'kingdom hearts wedding'}/>
                    
                    
                    </Col>
                </Row>


                <Row style={{ paddingLeft: 0, paddingRight: 0 }}>
                     <Col style={{ paddingLeft: 0, paddingRight: 0 }}>  
                     <img className='imgTest' src={'https://s23527.pcdn.co/wp-content/uploads/2019/01/photographer-1867699_1920-745x511.jpg.optimal.jpg'} alt='something cool'/>
                    {/* <div className='extra'>
                    Here we should have just one column
                    </div> */}
                    </Col>

                    <Col style={{ paddingLeft: 0, paddingRight: 0 }}>

                     If you are new to this site go ahead and sign up!
                      <Button variant="primary" onClick={() => handleShow()}>
                        Sign up Here!
                    </Button>
                     {/* passing modal with props */}
                     <SignUpModal
                     history={props.history}
                     show={show}
                     onHide={() => handleClose()}
                     />


                     If you already made an appointment and would like to update or cancel 
            <Button variant="primary" onClick={() => handleShow2()}>
                Login Here!
            </Button>
            {/* passing modal with props */}
            <LoginModal
                history={props.history}
                show={show2}
                onHide={() => handleClose2()}
            />

            
                    </Col>
                </Row>

            </div>

            
           
          
        </div>
  
    )

}



export default HomePage;


// class HomePage extends Component {
//     render(){     
//         return(
//             <div> 
//                 Here we have a big WELCOME page where itll introduce what we do here
//                 {console.log(appointment)}
//             </div>
//         )
//     }
// }