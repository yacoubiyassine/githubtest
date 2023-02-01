import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const Addmovie = ({setData,Data}) => {
const [name, setName] = useState('')
const [info, setInfo] = useState('')
const [image, setImage] = useState('')
const [price, setPrice] = useState(0)
function handelAddMovie (event ){ 
    event.preventDefault();
    
    setData([...data , {name, info, image, price}])
    handleClose()
}

const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
  return (
    <div><Button variant="primary" onClick={handleShow}>
    Add movie
  </Button>

  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Modal heading</Modal.Title>
    </Modal.Header>
    <Modal.Body> <Form onSubmit={handelAddMovie}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>name</Form.Label>
      <Form.Control  type="text"  name="name" placeholder="Enter name" onChange={e=>setName(e.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>info</Form.Label>
    <Form.Control type="text" name="info"  placeholder="Enter info" onChange={e=>setInfo(e.target.value)}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>image</Form.Label>
  <Form.Control type="text" name="image" placeholder="Enter image url" onChange={e=>setImage(e.target.value)}/>
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>price</Form.Label>
      <Form.Control type="Number" name="price" placeholder="Enter price" onChange={e=>setPrice(e.target.value)}/>
    </Form.Group>
   
   <button type="submit">Addmovie</button>
  </Form></Modal.Body>

    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={handelAddMovie}>
        Save Changes
      </Button>
    </Modal.Footer>
  </Modal></div>
  )
}

export default Addmovie