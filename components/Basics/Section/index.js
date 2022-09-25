export default function Section({ children, py, bg, id }) {
  let attr = {}
  if (id) attr.id = id
  return (
    <div {...attr} className={`${py ? py : 'py-24 '} ${bg ? bg : ''}`}>
      <div className="container px-4 mx-auto">{children}</div>
    </div>
  )
}
