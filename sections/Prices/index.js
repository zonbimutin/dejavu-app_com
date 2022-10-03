import Section from '@components/Basics/Section'
import SectionHeader from '@components/Basics/SectionHeader'
import PriceCard from '@components/Basics/PriceCard'

const prices = [
  {
    price: '30',
    currency: '€',
    title: 'Jour',
    subtitle: 'per year',
    features: [
      '100 MB Disk Space',
      '100 MB Disk Space',
      '100 MB Disk Space',
      '100 MB Disk Space',
      '100 MB Disk Space',
    ],
    link: '#',
  },
  {
    price: '30',
    currency: '€',
    title: 'Jour',
    subtitle: 'per year',
    features: [
      '100 MB Disk Space',
      '100 MB Disk Space',
      '100 MB Disk Space',
      '100 MB Disk Space',
    ],
    link: '#',
  },
  {
    price: '30',
    currency: '€',
    title: 'Jour',
    subtitle: 'per year',
    features: ['100 MB Disk Space', '100 MB Disk Space', '100 MB Disk Space'],
    link: '#',
  },
]

const Prices = () => {
  const header = {
    title: 'Lorem ipsum madolor sit amet, consectetur adipisicing elit,',
    subtitle: 'Nos Prix',
  }

  if (!prices?.length) return
  return (
    <Section id="prices" bg="bg-background">
      <SectionHeader header={header} />
      <div className="grid grid-cols-3 gap-20">
        {prices.map((price, key) => {
          return <PriceCard price={price} key={key} />
        })}
      </div>
    </Section>
  )
}

export default Prices