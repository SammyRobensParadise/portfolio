import React, { forwardRef, ForwardedRef } from 'react'
import { generateUUID } from 'three/src/math/MathUtils'
import clsx from 'clsx'

export type TableHeader = string | JSX.Element
export type TableHeaders = TableHeader[]
export type TableFooter = string | JSX.Element
export type TableFooters = TableFooter[]
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
  footers?: TableFooters
  id?: string
}
const Table = forwardRef(
  (props: TableInterface, ref: ForwardedRef<HTMLTableElement>): JSX.Element => (
    <div className="container text-cerulaen dark:text-off-white-24">
      <table className="table-auto w-full" ref={ref} id={props.id}>
        <thead className="text-3xl justify-start text-left pb-4 h-14 block">
          <tr>
            {props?.headers?.map((headerItem: string | JSX.Element) => (
              <th key={generateUUID()}>{headerItem}</th>
            ))}
          </tr>
        </thead>
        <tbody className="border border-cerulaen p-4 border-collapse">
          {props?.rows?.map((tableRow: TableRowItems) => (
            <tr key={generateUUID()} className="border border-b">
              {tableRow.map((tableElement, index) => {
                const { type, name, event } = tableElement
                let params = {}
                if (event) {
                  params = {
                    role: 'button',
                    tabIndex: 0,
                    onKeyPress: (e: KeyboardEvent) => {
                      if (e.key === 'Enter') {
                        event()
                      }
                    },
                    onClick: event,
                    key: generateUUID()
                  }
                }
                const Item = () => (
                  <td
                    className={clsx('p-4 whitespace-nowrap text-xl', {
                      ' w-2/12': index === 0 || index === 2
                    })}
                    {...params}
                  >
                    {type === 'text' ? (
                      name
                    ) : (
                      <div className="border-dashed border border-cerulaen h-0 w-full mt-2.5 rounded" />
                    )}
                  </td>
                )
                return <Item key={generateUUID()} />
              })}
            </tr>
          ))}
        </tbody>
        <thead className="text-xl justify-start text-left h-full block pt-6">
          <tr>
            {props?.footers?.map((headerItem: string | JSX.Element) => (
              <th key={generateUUID()}>{headerItem}</th>
            ))}
          </tr>
        </thead>
      </table>
    </div>
  )
)

export default Table
