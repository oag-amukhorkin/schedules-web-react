//BasicTable.jsx
import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import './table.css';

export const BasicTable = ({
                               getTableProps,
                               getTableBodyProps,
                               headerGroups,
                               rows,
                               prepareRow
                           }) => {
    return (
        <table {...getTableProps()}>
            <thead>
            {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                        <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                            {column.render("Header")}
                            <span>
                  {column.isSorted
                      ? column.isSortedDesc
                          ? " 🔽"
                          : " 🔼"
                      : ""}
                </span>
                        </th>
                    ))}
                </tr>
            ))}
            </thead>
            <tbody {...getTableBodyProps()}>
            {rows.map(row => {
                prepareRow(row);
                return (
                    <tr {...row.getRowProps()}>
                        {row.cells.map(cell => {
                            return (
                                <td {...cell.getCellProps()}>
                                    {cell.render("Cell")}
                                </td>
                            );
                        })}
                    </tr>
                );
            })}
            </tbody>
        </table>
    );
};

