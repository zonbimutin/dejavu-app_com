import { useDynamic } from '../../../hooks/useDynamic'

const DynamicSection = ({ section }) => {
  const Component = useDynamic({ typename: section.__typename })

  if (!Component) return null
  return <Component data={section} />
}

export default DynamicSection
