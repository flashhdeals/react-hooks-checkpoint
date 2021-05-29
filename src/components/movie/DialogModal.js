import React from "react";
import { Modal, Button } from "react-bootstrap";
export default function DialogModal(props) {
  return (
    <>
      <Modal show={props.modalStatus} onHide={props.handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.resMsg}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
