//TableControls.jsx
import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { ColumnToggleDropdown } from './ColumnToggleDropdown';
import { DatePickerModal } from './DatePickerModal';

const TableControls = ({ allColumns, getToggleHideAllColumnsProps, dateRange, setDateRange }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <Row className="mb-3">
            <Col xs={6} className="d-flex">
                <Button variant="dark" onClick={() => setShowModal(true)} className="me-2">Filter Data</Button>
                <ColumnToggleDropdown allColumns={allColumns} getToggleHideAllColumnsProps={getToggleHideAllColumnsProps} />
            </Col>
            <DatePickerModal
                dateRange={dateRange}
                setDateRange={setDateRange}
                showModal={showModal}
                setShowModal={setShowModal}
            />
        </Row>
    );
};

export default TableControls;

