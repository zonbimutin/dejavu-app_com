import Image from 'next/image'
import { FaMapMarkedAlt, FaTemperatureHigh } from 'react-icons/fa'
import Section from '@components/Basics/Section'
import {
  GiFilmProjector,
  GiBackup,
  GiBallHeart,
  GiBananaPeel,
} from 'react-icons/gi'
import UploadImage from '@components/Basics/UploadImage'

export default function About({ data }) {
  const { header, features, image } = data

  return (
    <Section id="about" bg={'bg-background'}>
      <div className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="w-[70%] m-auto lg:w-full">
            {image && <UploadImage image={image} />}
          </div>
          <div className="flex flex-col gap-6">
            {header && (
              <div>
                {header.title && <h3 className="mb-2">{header.title}</h3>}
                {header.subtitle && <h2 className="mb-2">{header.subtitle}</h2>}
                {header.text && <p>{header.text}</p>}
              </div>
            )}
            {features && Boolean(features.length) && (
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, key) => {
                  return (
                    <div key={key} className="p-4 text-primary">
                      {feature.icon && (
                        <div className="w-[50px] h-[50px]">
                          <UploadImage image={feature.icon} />
                        </div>
                      )}
                      {feature.text && (
                        <h5 className="mt-2 text-white">{feature.text}</h5>
                      )}
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </Section>
  )
}
