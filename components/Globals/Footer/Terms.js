import Section from '@components/Basics/Section'
import Link from 'next/link'

export default function Terms({ terms }) {
  return (
    <Section py="py-4" bg={'bg-[#16171a4D]'}>
      <div className="grid place-content-center gap-8 laptop:gap-0 laptop:flex laptop:justify-between items-end text-xs">
        <div className="grid place-content-center laptop:flex gap-4 text-center">
          {terms?.length &&
            terms.map((link, key) => {
              return (
                <Link href={`${link.href}`} key={key}>
                  <a className=" text-white underline hover:text-primary">
                    {link.label}
                  </a>
                </Link>
              )
            })}
        </div>
        <div className="text-white">
          Crée par{' '}
          <a
            href="https://alarconfr.com"
            target="_blank"
            rel="noopener"
            className=" underline hover:text-primary"
          >
            Felipe Alarcon
          </a>
        </div>
      </div>
    </Section>
  )
}
