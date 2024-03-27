//DatePickerModal.jsx
import 'react-datepicker/dist/react-datepicker.css';
import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import './DatePickerModal.css';

export const DatePickerModal = ({ dateRange, setDateRange, showModal, setShowModal }) => {
    if (!showModal) return null;

    return (
        <Modal show={showModal} onHide={() => setShowModal(false)} centered>
            <Modal.Header closeButton>
                <Modal.Title>Filter Data</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>Departure Date:</Form.Label>
                        <DatePicker
                            selectsRange={true}
                            startDate={dateRange[0]}
                            endDate={dateRange[1]}
                            onChange={update => setDateRange(update)}
                            dateFormat="yyyy-MM-dd"
                            isClearable={true}
                            className="form-control date-picker-margin"
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => setShowModal(false)}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => setShowModal(false)}>
                    Apply Filters
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DatePickerModal;

