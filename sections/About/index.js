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

  const about = {
    title: 'L’histoire de l’application mobile Déjà-Vu',
    subtitle: 'À propos',
    text: 'L’application Déjà-Vu regroupe tous les lieux de fiction à proximité de chez vous et dans le monde entier pour vous plonger dans des univers fantastiques, romanesques, de science-fiction et bien d’autres.',
    items: [
      {
        icon: <GiFilmProjector size={'4rem'} />,
        label: 'Des lieux de tournage et d’inspiration ',
      },
      {
        icon: <GiBananaPeel size={'4rem'} />,
        label: 'Des circuits sur vos sagas et fictions préférées',
      },
      {
        icon: <GiBackup size={'4rem'} />,
        label: 'Une équipe de passionnés',
      },
      {
        icon: <GiBallHeart size={'4rem'} />,
        label: 'Des anecdotes et faits réconnus',
      },
    ],
  }

  return (
    <Section id="about" bg={'bg-background'}>
      <div className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>{image && <UploadImage image={image} />}</div>
          <div className="grid gap-6">
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
                      {feature.icon && <UploadImage image={feature.icon} />}
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
