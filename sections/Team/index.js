import ProfileCard from '@components/Basics/ProfileCard'
import Section from '@components/Basics/Section'
import SectionHeader from '@components/Basics/SectionHeader'

const Team = () => {
  const header = {
    title: `Le talent derrière le déjà-vu`,
    subtitle: `L'equipe`,
    text: '',
  }

  const team = [
    {
      name: 'Felipe Alarcon',
      title: 'Fullstak Developer',
      desc: 'Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor coli incidit',
      image: '/img/team/felipe.jpeg',
      socials: [
        {
          type: 'facebook',
          link: 'https://alarconfr.com',
        },
        {
          type: 'instagram',
          link: 'https://alarconfr.com',
        },
        {
          type: 'linkedin',
          link: 'https://alarconfr.com',
        },
      ],
    },
    {
      name: 'Felipe Alarcon',
      title: 'Fullstak Developer',
      desc: 'Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor coli incidit',
      image: '/img/team/team-1.jpeg',
      socials: [
        {
          type: 'facebook',
          link: 'https://alarconfr.com',
        },
        {
          type: 'instagram',
          link: 'https://alarconfr.com',
        },
        {
          type: 'linkedin',
          link: 'https://alarconfr.com',
        },
      ],
    },
    {
      name: 'Felipe Alarcon',
      title: 'Fullstak Developer',
      desc: 'Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor coli incidit',
      image: '/img/team/felipe.jpeg',
      socials: [
        {
          type: 'facebook',
          link: 'https://alarconfr.com',
        },
        {
          type: 'instagram',
          link: 'https://alarconfr.com',
        },
        {
          type: 'linkedin',
          link: 'https://alarconfr.com',
        },
      ],
    },
    {
      name: 'Felipe Alarcon',
      title: 'Fullstak Developer',
      desc: 'Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor coli incidit',
      image: '/img/team/team-1.jpeg',
      socials: [
        {
          type: 'facebook',
          link: 'https://alarconfr.com',
        },
        {
          type: 'instagram',
          link: 'https://alarconfr.com',
        },
        {
          type: 'linkedin',
          link: 'https://alarconfr.com',
        },
      ],
    },
    {
      name: 'Felipe Alarcon',
      title: 'Fullstak Developer',
      desc: 'Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor coli incidit',
      image: '/img/team/felipe.jpeg',
      socials: [
        {
          type: 'facebook',
          link: 'https://alarconfr.com',
        },
        {
          type: 'instagram',
          link: 'https://alarconfr.com',
        },
        {
          type: 'linkedin',
          link: 'https://alarconfr.com',
        },
      ],
    },
  ]
  return (
    <Section id="team" bg="bg-background">
      <SectionHeader header={header} />
      <div className="flex flex-wrap justify-center gap-8 lg:gap-24 ">
        {team.map((profile, key) => {
          return <ProfileCard key={key} profile={profile} />
        })}
      </div>
    </Section>
  )
}

export default Team
