export default function Navbar({
  color = 'border-prussian-blue'
}: {
  color?: string
}): JSX.Element {
  return (
    <div>
      <button
        aria-label="home"
        type="button"
        className={`h-12 w-12 transition-all ease-in-out bg-off-white border-[16px] hover:border-8 n ${color}`}
      />
    </div>
  )
}
