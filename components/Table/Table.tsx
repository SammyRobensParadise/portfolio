import React, { PropsWithChildren } from 'react'
import { uuid } from 'uuidv4'

const Table = ({
  children
}: PropsWithChildren<Record<string, unknown>>): JSX.Element | null => {
  if (children) {
    const childrens = children as React.ReactElement[]
    const thead = childrens.length
      ? childrens.filter((child) => child?.type === 'thead')
      : childrens
    const trs = childrens.length
      ? childrens.filter((child) => child?.type === 'tr')
      : [childrens]

    return (
      <div className="container text-cerulaen dark:text-off-white">
        <table className="table-auto">
          {thead}
          <tbody>
            {trs.map((tr) => (
              <>{tr}</>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
  return null
}

export default Table
