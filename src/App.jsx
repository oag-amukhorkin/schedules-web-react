//App.jsx
import React, { useState, useMemo } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavBar from './components/NavBar';
import { BasicTable } from './components/BasicTable';
import TableControls from './components/TableControls';
import { useTable, useSortBy } from 'react-table';
import flightData from './components/flightData.json';
import { COLUMNS } from './components/columns';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
    // Manage the startDate state at the App level
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;

    // Filter the flightData based on the date range
    const data = useMemo(() => {
        return flightData.filter(flight => {
            const flightDate = new Date(flight.DepartureDate);
            const start = startDate ? new Date(startDate) : null;
            const end = endDate ? new Date(endDate) : null;

            if (!start && !end) return true;
            if (start && !end) return flightDate >= start;
            if (!start && end) return flightDate <= end;
            return flightDate >= start && flightDate <= end;
        });
    }, [startDate, endDate]);
    const columns = useMemo(() => COLUMNS, []);

    const tableInstance = useTable({ columns, data }, useSortBy);

    // Destructure the necessary methods and arrays from tableInstance
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        allColumns,
        getToggleHideAllColumnsProps
    } = tableInstance;

    return (
        <div>
            <NavBar />
            <Container fluid>
                <Row>
                    <Col xs={12} id="page-content-wrapper">
                        <TableControls
                            allColumns={allColumns}
                            getToggleHideAllColumnsProps={getToggleHideAllColumnsProps}
                            dateRange={dateRange} // pass dateRange to TableControls
                            setDateRange={setDateRange} // pass setDateRange to TableControls
                        />
                        <BasicTable
                            getTableProps={getTableProps}
                            getTableBodyProps={getTableBodyProps}
                            headerGroups={headerGroups}
                            rows={rows}
                            prepareRow={prepareRow}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
