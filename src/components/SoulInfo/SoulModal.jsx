import React from "react";
import { Modal, Button } from "react-bootstrap";

function SoulModal(props) {
	const handleClose = () => {
		console.log("test");
		props.handleClose();
	};
	return (
		<Modal show={props.show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>Modal heading</Modal.Title>
			</Modal.Header>
			<Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>
					Close
				</Button>
				<Button variant="primary" onClick={handleClose}>
					Save Changes
				</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default SoulModal;
