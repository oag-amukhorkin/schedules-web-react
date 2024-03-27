import React, { useMemo } from "react";
import { useTable, useSortBy } from "react-table";
import flightData from "./flightData.json";
import { COLUMNS } from "./columns";
import "./table.css";
import 'react-datepicker/dist/react-datepicker.css';

const IndeterminateCheckbox = React.forwardRef(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = React.useRef()
    const resolvedRef = ref || defaultRef

    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate
    }, [resolvedRef, indeterminate])

    return <input type="checkbox" ref={resolvedRef} {...rest} />
  }
)

export const BasicTable = () => {

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => flightData, [])

    const tableInstance = useTable({
        columns: columns,
        data: data,
    }, useSortBy)

    const { 
      getTableProps, 
      getTableBodyProps, 
      headerGroups, 
      rows, 
      prepareRow,
      allColumns,
      getToggleHideAllColumnsProps,
      state,
    } = tableInstance

    return (
      <>
      <div>
      <div>
        <IndeterminateCheckbox {...getToggleHideAllColumnsProps()} /> Toggle
        All
      </div>
      {allColumns.map(column => (
        <div key={column.id}>
          <label>
            <input type="checkbox" {...column.getToggleHiddenProps()} />{' '}
            {column.id}
          </label>
        </div>
      ))}
      <br />
    </div>
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}> {/* Add getSortByToggleProps to the th element */}
                {column.render("Header")}
                <span>
                  {column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : " ⏺️"}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
    </>
    )
}
