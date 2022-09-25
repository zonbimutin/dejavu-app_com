import Image from 'next/image'
import { motion } from 'framer-motion'
import { GiFilmProjector } from 'react-icons/gi'
import Section from '@components/Basics/Section'

export default function Features() {
  const features = {
    title: 'L’histoire de l’application mobile Déjà-Vu',
    subtitle: 'Caractéristiques',
    // text: 'L’application Déjà-Vu regroupe tous les lieux de fiction à proximité de chez vous et dans le monde entier pour vous plonger dans des univers fantastiques, romanesques, de science-fiction et bien d’autres.',
  }
  return (
    <Section id="features" bg="bg-background">
      <div>
        <div className="w-[70%] text-center m-auto">
          <h3 className="mb-2">{features.subtitle}</h3>
          <h2 className="mb-2">{features.title}</h2>
          {features.text && <p>{features.text}</p>}
        </div>
        <div className="lg:aspect-video flex relative mt-8">
          <div className="flex-grow w-[20%] flex flex-col justify-center gap-16">
            <div className="p-8 text-primary items-center translate-x-[15%]">
              <div className="flex gap-4 justify-end items-center mb-2">
                <h4 className="text-white text-lg">Lorem ipsum</h4>
                <GiFilmProjector size={'3rem'} />
              </div>
              <p className="text-right">
                For more than 5 years, we’ve been passionate about achieving
                better.
              </p>
            </div>
          </div>
          <motion.div
            className="spin m-auto aspect-square  h-[80%] border-8 rounded-full border-spacing-4 border-primary border-dashed"
            animate={{
              rotate: 360,
              transition: {
                duration: 100,
                ease: 'linear',
                repeat: Infinity,
              },
            }}
          />
          <div className="flex-grow w-[20%] flex flex-col justify-center gap-16">
            <div className="p-8 text-primary flex gap-4 items-center">
              <GiFilmProjector size={'4rem'} />
              <h5 className="text-white">
                Des lieux de tournage et d’inspiration{' '}
              </h5>
            </div>
          </div>
          <div className="absolute w-[25%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <Image
              className="w-5"
              src={'/img/iphone.png'}
              width={500}
              height={1000}
              layout="intrinsic"
            />
          </div>
        </div>
      </div>
    </Section>
  )
}
