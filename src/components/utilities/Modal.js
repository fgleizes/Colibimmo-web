import { Modal, Button } from 'react-bootstrap';

export const ConfirmModal = (props) => {
  const { show, handleClose, onConfirm, centered, title, body } = props

  return (
    <Modal show={show} onHide={handleClose} centered={centered}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{body}</Modal.Body>
      <Modal.Footer>
        <Button type="button" onClick={handleClose}>
          Annuler
        </Button>
        <Button type="submit" onClick={onConfirm}>
          Confirmer
        </Button>
      </Modal.Footer>
    </Modal>
  );
}