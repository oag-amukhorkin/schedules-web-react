import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import IndeterminateCheckbox from './IndeterminateCheckbox';
import './ColumnToggleDropdown.css';

export const ColumnToggleDropdown = ({ allColumns, getToggleHideAllColumnsProps }) => {
    // You can extract the props like this if you need to handle indeterminate state
    const { indeterminate, ...rest } = getToggleHideAllColumnsProps();

    return (
        <Dropdown>
            <Dropdown.Toggle variant="dark" id="dropdown-basic">
                Toggle Columns
            </Dropdown.Toggle>
            <Dropdown.Menu> {/* Remove padding from dropdown menu */}
                <Dropdown.ItemText as="div" className="d-flex align-items-center"> {/* Adjust padding as needed */}
                    <IndeterminateCheckbox {...getToggleHideAllColumnsProps()} label="All" />
                </Dropdown.ItemText>
                {allColumns.map(column => (
                    <Dropdown.Item as="div" key={column.id} className="d-flex align-items-center"> {/* Adjust padding as needed */}
                        <IndeterminateCheckbox {...column.getToggleHiddenProps()} label={column.render('Header')} />
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
};
