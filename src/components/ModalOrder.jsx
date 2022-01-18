import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ModalOrder = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate()

  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        PLACE AN ORDER
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Order form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" >
              <Form.Control type="email" placeholder="Enter First Name" />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Control type="email" placeholder="Enter Last Name" />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Control type="email" placeholder="Enter delivery address" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter card number" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Button onClick={()=>{
                navigate('/')
            }} variant="dark" type="submit">
              BUY NOW!
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalOrder;
