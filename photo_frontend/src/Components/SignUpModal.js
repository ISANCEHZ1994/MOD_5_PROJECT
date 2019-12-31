import React from 'react';
// import { useState } from 'react';
import { Modal, Button, InputGroup, FormControl, Form } from 'react-bootstrap';
import { createClient } from '../store/actions';
// import { render } from 'react-dom';

class signUpModal extends React.Component{

  render(){
  return (
    <Modal
      {...this.props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Form onSubmit={ (e) => { createClient(e, this.props.history) }}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          SIGN UP
      </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Who exactly are you?</h4>

        <div>

          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Something to call you.."
              aria-label="Full Name"
              aria-describedby="basic-addon1"
              // onChange={()=> {}}
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder='Youremail@fakemail.com'
              aria-label="Email"
              aria-describedby="basic-addon1"
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">Phone</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="To Stay In Contact"
              aria-label="Phone"
              aria-describedby="basic-addon1"
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">Password</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Something secret"
              aria-label="Password"
              aria-describedby="basic-addon1"
            />
          </InputGroup>

      </div>

      </Modal.Body>
      <Modal.Footer>
        <button type='submit'>
          god i hope this works
        </button>
        {/* <Button onClick={(e)=> { createClient(e)
                              this.props.history.push('/client_dashboard')}} > Submit </Button> */}
        <Button onClick={this.props.onHide}>Close</Button>
      </Modal.Footer>
      </Form>
    </Modal>
  );
}
}
export default signUpModal;
// function signUpModal(props) {
  // return (
  //   <Modal
  //     {...props}
  //     size="lg"
  //     aria-labelledby="contained-modal-title-vcenter"
  //     centered
  //   >
  //     <Modal.Header closeButton>
  //       <Modal.Title id="contained-modal-title-vcenter">
  //         SIGN UP
  //     </Modal.Title>
  //     </Modal.Header>
  //     <Modal.Body>
  //       <h4>Who exactly are you?</h4>

  //       <div>

  //         <InputGroup className="mb-3">
  //           <InputGroup.Prepend>
  //             <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
  //           </InputGroup.Prepend>
  //           <FormControl
  //             placeholder="Something to call you.."
  //             aria-label="Full Name"
  //             aria-describedby="basic-addon1"
  //           />
  //         </InputGroup>

  //         <InputGroup className="mb-3">
  //           <InputGroup.Prepend>
  //             <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
  //           </InputGroup.Prepend>
  //           <FormControl
  //             placeholder='Youremail@fakemail.com'
  //             aria-label="Email"
  //             aria-describedby="basic-addon1"
  //           />
  //         </InputGroup>

  //         <InputGroup className="mb-3">
  //           <InputGroup.Prepend>
  //             <InputGroup.Text id="basic-addon1">Phone</InputGroup.Text>
  //           </InputGroup.Prepend>
  //           <FormControl
  //             placeholder="For close encounters ;)"
  //             aria-label="Phone"
  //             aria-describedby="basic-addon1"
  //           />
  //         </InputGroup>

  //         <InputGroup className="mb-3">
  //           <InputGroup.Prepend>
  //             <InputGroup.Text id="basic-addon1">Password</InputGroup.Text>
  //           </InputGroup.Prepend>
  //           <FormControl
  //             placeholder="Something secret"
  //             aria-label="Password"
  //             aria-describedby="basic-addon1"
  //           />
  //         </InputGroup>

  //     </div>

  //     </Modal.Body>
  //     <Modal.Footer>
  //       <Button onClick={()=> {this.props.history.push('/client_dashboard')}}> Submit </Button>
  //       <Button onClick={this.props.onHide}>Close</Button>
  //     </Modal.Footer>
  //   </Modal>
  // );
// }
