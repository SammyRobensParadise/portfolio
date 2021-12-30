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
export type TableRows = {
  elements: TableRowItems
  onClick?: (event: React.MouseEvent) => void
  onHover?: (event: React.MouseEvent) => void
}[]

export interface TableInterface {
  classNames?: string
  rows: TableRows
  headers?: TableHeaders
  footers?: TableFooters
  id?: string
}

const Table = forwardRef(
  (props: TableInterface, ref: ForwardedRef<HTMLTableElement>): JSX.Element => (
    <div className="text-cerulaen dark:text-off-white">
      <table className="table-auto w-full" ref={ref} id={props.id}>
        <thead className="text-3xl justify-start text-left pb-4 block">
          <tr>
            {props?.headers?.map((headerItem: string | JSX.Element) => (
              <th key={generateUUID()}>{headerItem}</th>
            ))}
          </tr>
        </thead>

        <tbody className="border border-cerulaen p-4 border-collapse">
          {props?.rows.map(({ elements, onClick }) => (
            <tr
              role="link"
              key={generateUUID()}
              className="group border border-b transition transform hover:shadow-grow focus:shadow-grow focus:outline-none"
              tabIndex={0}
              onClick={onClick}
            >
              {elements.map((tableElement, index) => {
                const { type, name, event } = tableElement
                let params = {}
                if (event) {
                  params = {
                    role: 'link',
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
                    className={clsx(
                      'p-4 whitespace-nowrap text-xl group overflow-y-hidden text-left',
                      {
                        'w-1/2 sm:w-2/12': index === 0 || index === 2,
                        'hidden sm:block': index === 1
                      }
                    )}
                    {...params}
                  >
                    <a>
                      {type === 'text' ? (
                        name
                      ) : (
                        <div className="hidden sm:block">
                          <div
                            className="transition transform-gpu opacity-100 border-dashed border border-cerulaen dark:border-off-white h-0 w-full mt-2.5 rounded group-hover:translate-y-10 group-hover:opacity-0 group-focus:translate-y-10 group-focus:opacity-0"
                            title={name}
                          />
                          <div className="transition transform-gpu w-7/12 absolute opacity-0 -translate-y-10 group-hover:opacity-100 group-hover:-translate-y-3 group-focus:opacity-100 group-focus:-translate-y-3 overflow-ellipsis overflow-hidden">
                            {name}
                          </div>
                        </div>
                      )}
                    </a>
                  </td>
                )
                return <Item key={generateUUID()} />
              })}
            </tr>
          ))}
        </tbody>
        <thead className="text-xl justify-start text-left h-full block pt-6">
          <tr tabIndex={0}>
            {props?.footers?.map((footerItem: string | JSX.Element) => (
              <th key={generateUUID()}>{footerItem}</th>
            ))}
          </tr>
        </thead>
      </table>
    </div>
  )
)

export default Table
