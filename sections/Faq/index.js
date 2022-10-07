import { useState } from 'react'
import Accordeon from '@components/Basics/Accordeon'
import Section from '@components/Basics/Section'
import SectionHeader from '@components/Basics/SectionHeader'
import UploadImage from '@components/Basics/UploadImage'

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
  const { header, accordions, image } = data

  const [expanded, setExpanded] = useState(0)

  return (
    <Section id="faq" bg="bg-background">
      <SectionHeader header={header} />
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-24">
        {accordions?.length && (
          <div className="lg:col-span-3 flex flex-col gap-8">
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
        {image && (
          <div className="lg:col-span-2 flex justify-center lg:justify-center w-full">
            <div className="m-auto w-[50%] lg:w-[70%]">
              <UploadImage image={image} />
            </div>
          </div>
        )}
      </div>
    </Section>
  )
}

export default Faq
