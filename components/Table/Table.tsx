import React, { PropsWithChildren } from 'react'
import { uuid } from 'uuidv4'

const Table = ({
  children
}: PropsWithChildren<Record<string, unknown>>): JSX.Element | null => {
  if (children) {
    const childrens = children as React.ReactNode[]
    return (
      <table>
        {childrens.map((child) => (
          <div key={uuid()} className="child">
            {child}
          </div>
        ))}
      </table>
    )
  }
  return null
}

export default Table
