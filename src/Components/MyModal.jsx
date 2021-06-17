import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useState } from 'react';

export default function ModalShow(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div onClick={handleShow}>
        {props.formType === 'edit' ? (
          <i class="bi bi-pencil fs-5"></i>
        ) : (
          <i class="bi bi-plus fs-3"></i>
        )}
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {props.formType === 'edit' ? 'Edit Experience' : 'Add Experience'}
          </Modal.Title>
        </Modal.Header>
        <Form onSubmit={props.handleSubmit}>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Role</Form.Label>
              <Form.Control
                id="role"
                type="text"
                placeholder="Role..."
                value={props.role}
                onChange={props.handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Company Name</Form.Label>
              <Form.Control
                id="company"
                type="text"
                placeholder="Company Name..."
                value={props.company}
                onChange={props.handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Start date</Form.Label>
              <Form.Control
                id="startDate"
                type="datetime-local"
                placeholder="Start date..."
                value={props.startDate}
                onChange={props.handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>description</Form.Label>
              <Form.Control
                id="description"
                type="text-area"
                placeholder="description..."
                value={props.description}
                onChange={props.handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Area</Form.Label>
              <Form.Control
                id="area"
                type="text"
                placeholder="Area..."
                value={props.area}
                onChange={props.handleChange}
              />
            </Form.Group>
            {/* {props.formType === 'edit' && ( */}
              <Form.Group className="mt-3">
                <Form.Control
                  id="picture"
                  type="file"
                  onChange={props.selectImage}
                />
              </Form.Group>
            {/* )} */}
          </Modal.Body>
          <Modal.Footer>
            <Button
              as="input"
              type="submit"
              value="Submit"
              variant="outline-primary"
              onClick={handleClose}
            />
            {props.formType === 'edit' && (
              <Button
                as="input"
                type="button"
                value="Delete"
                variant="outline-primary"
                onClick={props.handleDelete}
              />
            )}
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}
