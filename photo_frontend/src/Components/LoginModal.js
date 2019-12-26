import React from 'react';
// import { useState } from 'react';
import { Modal, Button, InputGroup, FormControl } from 'react-bootstrap';
// import { render } from 'react-dom';


function loginModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
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
              <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="What was your full name?"
              aria-label="Full Name"
              aria-describedby="basic-addon1"
            />
          </InputGroup>

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

          {/* <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">Phone</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="I mean we have it..but is it the same?"
              aria-label="Phone"
              aria-describedby="basic-addon1"
            />
          </InputGroup> */}

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

          {/* <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup> */}

        </div>

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default loginModal;
