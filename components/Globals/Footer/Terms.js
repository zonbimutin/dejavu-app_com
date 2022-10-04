import Section from '@components/Basics/Section'
import Link from 'next/link'

export default function Terms() {
  return (
    <Section py="py-4" bg={'bg-[#16171a4D]'}>
      <div className="grid place-content-center gap-8 laptop:gap-0 laptop:flex laptop:justify-between items-end text-xs">
        <div className="grid place-content-center laptop:flex gap-4 text-center">
          <Link href="#">
            <a className=" text-white underline hover:text-primary">
              Terms and Conditions
            </a>
          </Link>
          <Link href="#">
            <a className=" text-white underline hover:text-primary">
              Privacy Policy
            </a>
          </Link>
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
