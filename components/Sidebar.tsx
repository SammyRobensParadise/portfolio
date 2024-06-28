export default function Sidebar(): JSX.Element {
  return (
    <div className="fixed flex h-full flex-col bg-prussian-blue w-[50%]">
      <div className="p-4 mb-2">
        <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          Sidebar
        </h5>
      </div>
      <nav className="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
        content
      </nav>
    </div>
  )
}
