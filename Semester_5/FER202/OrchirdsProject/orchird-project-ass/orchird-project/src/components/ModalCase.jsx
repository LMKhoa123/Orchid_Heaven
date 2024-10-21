import { Modal, Button } from "react-bootstrap";

function ModalCase({ isOpen, setIsOpen, orchid }) {
  const handleClose = () => setIsOpen(false);

  return (
    <Modal show={isOpen} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{orchid.name} Video</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <iframe
          width="460"
          height="315"
          src={orchid.clip}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalCase;
