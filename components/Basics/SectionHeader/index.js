const SectionHeader = ({ header }) => {
  return (
    <div className="w-[70%] text-center m-auto mb-24">
      {header.subtitle && <h3 className="mb-2">{header.subtitle}</h3>}
      {header.title && <h2 className="mb-2">{header.title}</h2>}
      {header.text && <p>{header.text}</p>}
    </div>
  )
}

export default SectionHeader
