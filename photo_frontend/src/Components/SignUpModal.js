import React from 'react';
import { Modal, InputGroup, FormControl, Form } from 'react-bootstrap';
import { createClient } from '../store/actions';

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
            <div> {/* STARTS HERE */}
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  placeholder="Something to call you.."
                  aria-label="Full Name"
                  aria-describedby="basic-addon1"
                
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
                  type='password'
                />
              </InputGroup>
          </div> {/* ENDS HERE */}
      </Modal.Body>
      <Modal.Footer>
        <button type='submit'>
          Submit
        </button>
      </Modal.Footer>
      </Form>
    </Modal>
  );
}
}
export default signUpModal;
