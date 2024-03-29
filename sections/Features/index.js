import Image from 'next/image'
import { motion } from 'framer-motion'
import { GiFilmProjector } from 'react-icons/gi'
import Section from '@components/Basics/Section'
import SectionHeader from '@components/Basics/SectionHeader'
import UploadImage from '@components/Basics/UploadImage'

export default function Features({ data }) {
  const { header, features, image } = data

  return (
    <Section id="features" bg="bg-background">
      <SectionHeader header={header} />
      <div className="grid lg:flex justify-center relative ">
        <div className="w-[50%] lg:w-[25%] relative m-auto mb-8 lg:mb-0">
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-[90%] overflow-hidden">
            <motion.div
              className="spin m-auto aspect-square h-full  border-8 rounded-full border-spacing-4 border-primary border-dashed"
              animate={{
                rotate: 360,
                transition: {
                  duration: 100,
                  ease: 'linear',
                  repeat: Infinity,
                },
              }}
            />
          </div>
          {image && <UploadImage image={image} />}
        </div>

        {features?.length && (
          <div className="lg:absolute mx-auto w-[70%] lg:w-full h-full grid lg:grid-cols-2">
            {features.map((feature, key) => {
              const odd = Boolean((key + 1) % 2)
              return (
                <FeatureCard
                  key={key}
                  odd={odd}
                  feature={feature}
                  index={key + 1}
                />
              )
            })}
          </div>
        )}
      </div>
    </Section>
  )
}

const FeatureCard = ({ odd, index, feature }) => {
  const { title, text, icon } = feature

  let translate = false
  let transition = ''
  if (index != 3 && index != 4) {
    translate = true
    transition = odd ? 'lg:translate-x-[20%]' : 'lg:translate-x-[-20%]'
  }

  return (
    <div
      className={`py-8 text-primary items-center lg:max-w-[250px] w-fit ${
        odd ? 'lg:mr-auto' : 'lg:ml-auto'
      } ${translate ? transition : ''}`}
    >
      <div
        className={`flex flex-col gap-4 justify-start items-center mb-2 ${
          !odd ? 'lg:flex-row' : 'lg:flex-row-reverse text-right'
        }`}
      >
        {icon && (
          <div className="w-[50px]">
            <UploadImage image={icon} />
          </div>
        )}
        {title && <h4 className="text-white text-lg font-caviar">{title}</h4>}
      </div>
      {text && (
        <p className={`text-center ${odd ? 'lg:text-right' : 'lg:text-left'}`}>
          {text}
        </p>
      )}
    </div>
  )
}
