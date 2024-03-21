import React from 'react'

const Table = ({ headers, data, headerColor, rowColor }) => {
  return (
    <table className="table-auto border-collapse w-full">
      <thead>
        <tr className={`bg-${headerColor}-200 text-${headerColor}-800`}>
          {headers.map((header, index) => (
            <th key={index} className="border border-gray-400 px-4 py-2">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex} className={`bg-${rowIndex % 2 === 0 ? rowColor : 'white'} text-gray-800`}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex} className="border border-gray-400 px-4 py-2">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
