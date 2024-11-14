import React from 'react'

function DiagonsticList({list}) {
  return (
    <>
      <tr className="border-b">
          <td className="py-3 px-4">{list.name}</td>
          <td className="py-3 px-4">{list.description}</td>
          <td className="py-3 px-4">
            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm">
              {list.status}
            </span>
          </td>
        </tr>
    </>
  )
}

export default DiagonsticList