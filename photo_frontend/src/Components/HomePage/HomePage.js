import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import SignUpModal from '../SignUpModal';
import LoginModal from '../LoginModal';
import { Button, Row, Col } from 'react-bootstrap';
import './HomePage.css'

function HomePage() {

   
    //for modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show2,setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const appointments = useSelector(state => state.appointments)//calls from the reducer index where we assigned the apponitment property which leads the appointment reducer
    // reducer folder / index --> appointmentReducer.js
    const clients = useSelector(state => state.clients)
    const photographers = useSelector(state => state.photographers)
    const photos = useSelector(state => state.photos)
    const addresses = useSelector(state => state.addresses)

    // const mystyle = {
    //     color: "white",
    //     backgroundColor: "DodgerBlue",
    //     padding: "10px",
    //     fontFamily: "Arial",
    //     height: '500px',
    //     width: '130px'
    //   };

    // const test = {
    //         height: '500px',
    //         width: '130%',
    //         // backgroundColor: 'powderblue' 
    // };

    // const container = {
    //     backgroundColor: rgba(0,0,0,0.3),
    //     // height: calc(100vh - 56px);
    //     height: calc(~"100vh - 400px")
    //   }

    return (
  
        <div className='mainContainer'>
           
            <div >
                
                <Row style={{ marginLeft: 0, marginRight: 0 }}>
                    <Col style={{ paddingLeft: 0, paddingRight: 0 }}> 
                        <div >

                            <div className='header'>
                        <h1 style={{color: 'white'}}> Here we have a big ass WELCOME page where itll introduce what we do here </h1> 
                            </div>
                            
                        </div>   
                    </Col>
                </Row>

                <Row className ='rowParent' style={{ marginLeft: 0, marginRight: 0 }}>
                    <Col style={{ paddingLeft: 0, paddingRight: 0 }}> 
                   <div  className='mystyle'  >
                   1 of 2 this is a test img --->  
                
                   </div>
                    </Col>

                    <Col style={{ paddingLeft: 0, paddingRight: 0 }}> 
                    
                        <img className= 'imgTest' src={'https://66.media.tumblr.com/41eb6b7b85db859d9f643962ddfc47aa/tumblr_ouw9e5LGy61uzf1fuo3_1280.jpg'} alt={'kingdom hearts wedding'}/>
                    
                    
                    </Col>
                </Row>
                <Row style={{ paddingLeft: 0, paddingRight: 0 }}>
                     <Col style={{ paddingLeft: 0, paddingRight: 0 }}>  
                     <img className='imgTest' src={'https://i.pinimg.com/originals/aa/92/25/aa922540e07fbe1fda01393a7b470b09.jpg'} alt='something cool'/>
                    {/* <div className='extra'>
                    Here we should have just one column
                    </div> */}
                    </Col>

                    <Col style={{ paddingLeft: 0, paddingRight: 0 }}>
                     Here is another column
                    </Col>
                </Row>

        <Button variant="primary" onClick={() => handleShow()}>
                Sign up Here!
            </Button>
            {/* passing modal with props */}
            <SignUpModal
                show={show}
                onHide={() => handleClose()}
            />

            <Button variant="primary" onClick={() => handleShow2()}>
                Login Here!
            </Button>
            {/* passing modal with props */}
            <LoginModal
                show={show2}
                onHide={() => handleClose2()}
            />
            </div>

            
           
            {console.log(appointments)}
            {console.log(clients)}
            {console.log(photographers)}
            {console.log(photos)}
            {console.log(addresses)}
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