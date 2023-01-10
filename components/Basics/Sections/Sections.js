const { default: DynamicSection } = require('../DynamicSection/DynamicSection')

const Sections = ({ sections }) => {
  if (!sections.length) return
  return (
    <>
      {sections.map((section, key) => {
        return <DynamicSection section={section} key={key} />
      })}
    </>
  )
}

export default Sections
