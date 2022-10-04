export default function Section({ children, py, bg, id, alt }) {
  let background = bg ?? ''
  if (alt)
    background =
      'bg-backgroundLight bg-footer-texture bg-repeat bg-center bg-16 bg-fixed'
  let attr = {}
  if (id) attr.id = id
  return (
    <div {...attr} className={`${py ? py : 'py-16 lg:py-24'} ${background}`}>
      <div className="container px-4 mx-auto">{children}</div>
    </div>
  )
}
