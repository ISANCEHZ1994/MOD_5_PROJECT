import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import SignUpModal from './SignUpModal';
import LoginModal from './LoginModal';
import { Button, Container, Row, Col } from 'react-bootstrap';


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



    return (
        <div >
            Here we have a big ass WELCOME page where itll introduce what we do here
            

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

            <Container>
                <Row>
                    <Col>1 of 2 but how much can you write untill this starts to look weird? </Col>
                    <Col> 2 of 2 this is a test img --->   <img src={'https://i.pinimg.com/originals/17/03/9b/17039b13bea9ef4bc147ecfde15dfbf6.png'} alt='this is a cool pic'/>  </Col>
                </Row>
                <Row>
                    <Col>1 of 3 </Col>
                    <Col>2 of 3 </Col>
                    <Col>3 of 3 </Col>
                </Row>
            </Container>

           
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


