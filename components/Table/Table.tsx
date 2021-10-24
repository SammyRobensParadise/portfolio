import React, { PropsWithChildren, forwardRef, ForwardedRef } from 'react'

export type TableHeader = string
export type TableHeaders = TableHeader[]
export type TableRowItem = {
  name: string
  event?: () => void
  type: 'text' | 'style'
}
export type TableRowItems = TableRowItem[]
export type TableRows = TableRowItems[]

export interface TableInterface {
  classNames?: string
  rows: TableRows
}

const Table = forwardRef(
  (
    props: PropsWithChildren<TableInterface>,
    ref: ForwardedRef<HTMLTableElement>
  ): JSX.Element => (
    <div className="container text-cerulaen dark:text-off-white-24">
      <table className="table-auto w-full" ref={ref}>
        <tbody className="border border-cerulaen p-4 border-collapse" />
      </table>
    </div>
  )
)

export default Table
