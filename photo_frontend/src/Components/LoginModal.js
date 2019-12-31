import React from 'react';
// import { useState } from 'react';
import { Modal, Button, InputGroup, FormControl,Form } from 'react-bootstrap';
import { loginClient } from '../store/actions'
// import { useDisp}
// import { Link } from 'react-dom';

class loginModal extends React.Component{

  render(){
    return(
      
      <Modal
      {...this.props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Form onSubmit={ (e) => { e.preventDefault()
                                      loginClient(e.target,this.props.history) }}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Login
      </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Do We Remember You?</h4>

        <div>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder='What was your email?'
              aria-label="Email"
              aria-describedby="basic-addon1"
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">Password</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="I know you know this.."
              aria-label="Password"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </div>

      </Modal.Body>
      <Modal.Footer>
      <button type='submit' >
          god i hope this works
        </button>
         
         {/*onClick={()=>{this.props.history.push('/appointments_dashboard')} */}
        <Button onClick={this.props.onHide}>Close</Button>
      </Modal.Footer>
      </Form>
    </Modal>
    )
  }
}

export default loginModal;
// function loginModal(props) {
//   // console.log(props.history)
//   //  debugger
//   return (
//     <Modal
//       {...props}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//     >
//       <Modal.Header closeButton>
//         <Modal.Title id="contained-modal-title-vcenter">
//           Login
//       </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <h4>Do We Remember You?</h4>

//         <div>

//           <InputGroup className="mb-3">
//             <InputGroup.Prepend>
//               <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
//             </InputGroup.Prepend>
//             <FormControl
//               placeholder="What was your full name?"
//               aria-label="Full Name"
//               aria-describedby="basic-addon1"
//             />
//           </InputGroup>

//           <InputGroup className="mb-3">
//             <InputGroup.Prepend>
//               <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
//             </InputGroup.Prepend>
//             <FormControl
//               placeholder='What was your email?'
//               aria-label="Email"
//               aria-describedby="basic-addon1"
//             />
//           </InputGroup>

//           <InputGroup className="mb-3">
//             <InputGroup.Prepend>
//               <InputGroup.Text id="basic-addon1">Password</InputGroup.Text>
//             </InputGroup.Prepend>
//             <FormControl
//               placeholder="I know you know this.."
//               aria-label="Password"
//               aria-describedby="basic-addon1"
//             />
//           </InputGroup>
//         </div>

//       </Modal.Body>
//       <Modal.Footer>
//         <Button onClick={()=> {props.history.push('/appointments_dashboard')}}> Remember me? </Button>
//         <Button onClick={props.onHide}>Close</Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }

