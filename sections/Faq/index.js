import { useState } from 'react'
import Accordeon from '@components/Basics/Accordeon'
import Section from '@components/Basics/Section'
import SectionHeader from '@components/Basics/SectionHeader'

const accordeons = [
  {
    title: 'Hello World',
    content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum tenetur dicta commodi, totam atque fugit ut magnam laboriosam dignissimos dolorum minus quia sed distinctio in mollitia laborum sint delectus accusamus!
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum tenetur dicta commodi, totam atque fugit ut magnam.`,
  },
  {
    title: 'Hello World',
    content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum tenetur dicta commodi, totam atque fugit ut magnam laboriosam dignissimos dolorum minus quia sed distinctio in mollitia laborum sint delectus accusamus!
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum tenetur dicta commodi, totam atque fugit ut magnam.`,
  },
]

const Faq = ({ data }) => {
  const { header, accordions } = data

  const [expanded, setExpanded] = useState(0)

  return (
    <Section id="faq" bg="bg-background">
      <SectionHeader header={header} />
      <div className="grid grid-cols-1 lg:grid-cols-5">
        {accordions?.length && (
          <div className="col-span-3 grid gap-8">
            {accordions.map((acc, key) => {
              return (
                <Accordeon
                  key={key}
                  expanded={expanded}
                  setExpanded={setExpanded}
                  i={key}
                  {...acc}
                />
              )
            })}
          </div>
        )}
      </div>
    </Section>
  )
}

export default Faq
