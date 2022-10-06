const SectionHeader = ({ header }) => {
  return (
    <div className="w-[90%] lg:w-[70%] text-center m-auto mb-24">
      {header.title && <h3 className="mb-2">{header.title}</h3>}
      {header.subtitle && <h2 className="mb-2">{header.subtitle}</h2>}
      {header.text && <p>{header.text}</p>}
    </div>
  )
}

export default SectionHeader
