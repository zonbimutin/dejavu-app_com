import Section from '@components/Basics/Section'
import Link from 'next/link'
import ButtonLink from '@components/Basics/ButtonLink'

const Error404 = () => {
  return (
    <Section>
      <div className="h-[600px] grid place-content-center text-center justify-center gap-4">
        <h1 className="font-4xl">404!</h1>
        <h3 className="sub-title">Page not found</h3>
        <span className="text-white">
          The page you were looking for could not be found.
        </span>
        <ButtonLink link={{ href: '/', label: `Retourner a l'accueil` }} />
      </div>
    </Section>
  )
}
export default Error404
