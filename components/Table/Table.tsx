import React, { forwardRef, ForwardedRef } from 'react'
import { uuid } from 'uuidv4'

export type TableHeader = string
export type TableHeaders = TableHeader[]
export type TableRowItem = {
  name?: string
  event?: () => void
  type?: 'text' | 'style'
}
export type TableRowItems = TableRowItem[]
export type TableRows = TableRowItems[]

export interface TableInterface {
  classNames?: string
  rows: TableRows
  headers?: TableHeaders
}

const Table = forwardRef(
  (props: TableInterface, ref: ForwardedRef<HTMLTableElement>): JSX.Element => (
    <div className="container text-cerulaen dark:text-off-white-24">
      <table className="table-auto w-full" ref={ref}>
        <thead className="text-3xl justify-start">
          <tr>
            {props?.headers?.map((headerItem) => (
              <th key={uuid()}>{headerItem}</th>
            ))}
          </tr>
        </thead>
        <tbody className="border border-cerulaen p-4 border-collapse">
          {props?.rows?.map((tableRow) => (
            <tr key={uuid()} className="border border-b">
              {tableRow.map((tableElement) => (
                <td key={uuid()} className="p-4 whitespace-nowrap w-36">
                  {tableElement.type === 'text' ? (
                    tableElement.name
                  ) : (
                    <div className="border-dashed border border-cerulaen h-0 w-full mt-2.5 rounded" />
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
)

export default Table
