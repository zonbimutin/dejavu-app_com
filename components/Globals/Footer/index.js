import Newsletter from '@components/Basics/Newsletter'
import Section from '@components/Basics/Section'
import UploadImage from '@components/Basics/UploadImage'
import Image from 'next/image'
import Link from 'next/link'
import Terms from './Terms'

export default function Footer({ footer }) {
  const { logo, quicklinks, socials, contact } = footer
  return (
    <div
      id="footer"
      className="bg-backgroundLight bg-footer-texture pt-24 bg-repeat bg-center bg-16 bg-fixed"
    >
      {/* <Newsletter /> */}
      <Section py="py-4">
        <div className="grid grid-cols-1 place-content-center lg:grid-cols-4 gap-8 lg:gap-16 py-8">
          <div className="mx-auto text-center">
            <div className="w-full">{logo && <UploadImage image={logo} />}</div>
          </div>
          {quicklinks && Boolean(quicklinks.length) && (
            <div className="mx-auto text-center lg:text-start">
              <h4 className="font-caviar text-xl text-primary py-4">
                Quick Links
              </h4>
              <ul className="grid">
                {quicklinks.map((link, key) => {
                  return (
                    <Link href={link.href}>
                      <a className="font-inter text-white font-medium hover:text-primary mt-4">
                        {link.lanel}
                      </a>
                    </Link>
                  )
                })}
              </ul>
            </div>
          )}
          {socials && Boolean(socials.length) && (
            <div className="mx-auto text-center lg:text-start">
              <h4 className="font-caviar text-xl text-primary py-4">
                Social Media
              </h4>
              <ul className="grid">
                {socials.map((link, key) => {
                  return (
                    <Link href={link.href}>
                      <a className="font-inter text-white font-medium hover:text-primary mt-4">
                        {link.lanel}
                      </a>
                    </Link>
                  )
                })}
              </ul>
            </div>
          )}

          {contact && (
            <div className="mx-auto text-center lg:text-start">
              <h4 className="font-caviar text-xl text-primary  py-4">
                Contact
              </h4>
              <div className="grid">
                {contact.address && (
                  <div className="mt-4 text-white">{contact.address}</div>
                )}
                {contact.mail && (
                  <div className="font-inter text-white flex gap-2 mt-4 justify-center lg:justify-start">
                    <a
                      href={`mailto:${contact.mail}`}
                      className="font-medium hover:text-primary mr-2"
                    >
                      {contact.mail}
                    </a>
                  </div>
                )}
                {contact.phone && (
                  <div className="font-inter text-white flex gap-2 mt-4 justify-center lg:justify-start">
                    <a
                      href={`tel:${contact.phone}`}
                      className="font-inter text-white font-medium hover:text-primary"
                    >
                      {contact.phone}
                    </a>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </Section>
      <Terms />
    </div>
  )
}
