import Image from 'next/image'
import { motion } from 'framer-motion'
import { GiFilmProjector } from 'react-icons/gi'
import Section from '@components/Basics/Section'
import SectionHeader from '@components/Basics/SectionHeader'

export default function Features() {
  const header = {
    title: 'L’histoire de l’application mobile Déjà-Vu',
    subtitle: 'Caractéristiques',
    // text: 'L’application Déjà-Vu regroupe tous les lieux de fiction à proximité de chez vous et dans le monde entier pour vous plonger dans des univers fantastiques, romanesques, de science-fiction et bien d’autres.',
  }

  const features = [1, 2, 3, 4, 5, 6]

  return (
    <Section id="features" bg="bg-background">
      <SectionHeader header={header} />
      <div className="grid lg:flex justify-center relative ">
        <div className="w-[50%] lg:w-[25%] relative m-auto">
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-[90%]">
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
          <Image
            className="w-5"
            src={'/img/iphone.png'}
            width={500}
            height={1000}
            layout="intrinsic"
          />
        </div>

        {features?.length && (
          <div className="lg:absolute mx-auto w-[70%] lg:w-full h-full grid lg:grid-cols-2">
            {features.map((feature, key) => {
              const odd = Boolean((key + 1) % 2)
              return <FeatureCard key={key} odd={odd} index={key + 1} />
            })}
          </div>
        )}
      </div>
    </Section>
  )
}

const FeatureCard = ({ odd, index }) => {
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
          !odd ? 'lg:flex-row' : 'lg:flex-row-reverse'
        }`}
      >
        <GiFilmProjector size={'3rem'} />
        <h4 className="text-white text-lg">Lorem ipsum</h4>
      </div>
      <p className={`text-center ${odd ? 'lg:text-right' : 'lg:text-left'}`}>
        For more than 5 years, we’ve been passionate about achieving better.
      </p>
    </div>
  )
}
