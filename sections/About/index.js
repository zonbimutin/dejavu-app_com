import Image from 'next/image'
import { FaMapMarkedAlt } from 'react-icons/fa'
import {
  GiFilmProjector,
  GiBackup,
  GiBallHeart,
  GiBananaPeel,
} from 'react-icons/gi'

export default function About() {
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
    <div id="about" className=" bg-background py-24">
      <div className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <Image src={'/svg/nuage.svg'} width={100} height={50} />
          </div>
          <div className="grid gap-6">
            <div>
              <h3 className="mb-2">{about.subtitle}</h3>
              <h2 className="mb-2">{about.title}</h2>
              <p>{about.text}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {about.items.map((item, key) => {
                return (
                  <div key={key} className="p-4 text-primary">
                    {item.icon}
                    <h5 className="mt-2 text-white">{item.label}</h5>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
