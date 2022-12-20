import React from 'react';
import './tablec.css'
const TableC = ({data, columns}) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            {columns.map((head) =>
              <th>
                {head.header}
              </th>)}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr>
              {columns.map((col) => (
                <td>{row[col.field]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
export default TableC
