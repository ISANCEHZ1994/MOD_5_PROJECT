import React, { useState } from 'react';
import SignUpModal from '../SignUpModal';
import LoginModal from '../LoginModal';
import { Button, Row, Col } from 'react-bootstrap';
import './HomePage.css'

function HomePage(props) {

    //for modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show2,setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    return (
  
        <div className='mainContainer'>
           
            <div>
                <Row style={{ marginLeft: 0, marginRight: 0 }}> {/* <-------- Everything is inside this ROW */}
                    <Col style={{ paddingLeft: 0, paddingRight: 0 }}> 
                        <div className='header'>
                            <div className='headerDetail'>
                        <h1 > Welcome To Your Snap! </h1> 
                            </div>
                            
                        </div>   
                    </Col>
                </Row>

                <Row className ='rowParent' style={{ marginLeft: 0, marginRight: 0 }}> {/* <-------- Everything is inside this ROW */}

                    <Col style={{ paddingLeft: 0, paddingRight: 0 }}> 
                    
                    <div className='bg-image'> </div> {/* <-- This is the actual image */}

                   <div  className='welcomeSquare'>

                            <div className='innerBorder' >   
                    <h4> 
                        Here at Your Snap we strive to make any day beautiful and perfect. Our photographers are dedicated to 
                        take only the best photos in anyway you want.
                    </h4>
                            </div>

                   </div> 
                    </Col>

                    <Col style={{ paddingLeft: 0, paddingRight: 0 }}> 
                        <img className= 'imgTest' src={'https://cdn.mos.cms.futurecdn.net/HfpNyWo7Um89DknAYnoRcN.jpg'} alt={'kingdom hearts wedding'}/>
                    </Col>

                </Row>


                <Row style={{ paddingLeft: 0, paddingRight: 0 }}> {/* <-------- Everything is inside this ROW */}

                     <Col style={{ paddingLeft: 0, paddingRight: 0 }}>  
                        <img className='imgTest' src={'https://s23527.pcdn.co/wp-content/uploads/2019/01/photographer-1867699_1920-745x511.jpg.optimal.jpg'} alt='something cool'/>
                    </Col>

                    <Col className='loginSquare' style={{ paddingLeft: 0, paddingRight: 0 }}>

                        <div className='bg-image2'></div> {/* <-- This is the actual image */}

               

                    <div className='innerBorder2'>
                        <h4> If you are new to this site go ahead and sign up! </h4>
                      <Button variant="primary" onClick={() => handleShow()}>
                        Sign up Here!
                    </Button>
                     {/* passing modal with props */}
                     <SignUpModal
                     history={props.history}
                     show={show}
                     onHide={() => handleClose()}
                     /> 
                     <br></br>

                        <h4> If you already made an appointment and would like to update or cancel </h4> 
                        <Button variant="primary" onClick={() => handleShow2()}>
                            Login Here!
                        </Button>
                        {/* passing modal with props */}
                        <LoginModal
                            history={props.history}
                            show={show2}
                            onHide={() => handleClose2()}/>
                    
                </div>
                    </Col>
                </Row>
            </div>
        </div>
  
    )

}



export default HomePage;
