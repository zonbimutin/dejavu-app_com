import Section from '@components/Basics/Section'
import SectionHeader from '@components/Basics/SectionHeader'
import PriceCard from '@components/Basics/PriceCard'

const Prices = ({ data }) => {
  const { header, prices } = data

  if (!prices?.length) return
  return (
    <Section id="prices" bg="bg-background">
      <SectionHeader header={header} />
      <div className="flex flex-wrap gap-16 lg:grid lg:grid-cols-3 lg:gap-20 justify-center">
        {prices.map((price, key) => {
          return <PriceCard price={price} key={key} />
        })}
      </div>
    </Section>
  )
}

export default Prices
