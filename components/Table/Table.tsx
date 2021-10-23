import React, { PropsWithChildren } from 'react'

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
      <div className="container text-cerulaen dark:text-off-white-24">
        <table className="table-auto w-full">
          {thead}
          <tbody className="border border-cerulaen p-4 border-collapse">
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
