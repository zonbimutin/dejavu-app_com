import Newsletter from '@components/Basics/Newsletter'
import Section from '@components/Basics/Section'
import Image from 'next/image'
import Link from 'next/link'
import Terms from './Terms'

export default function Footer() {
  return (
    <div
      id="footer"
      className="bg-backgroundLight bg-footer-texture pt-24 bg-repeat bg-center bg-16 bg-fixed"
    >
      {/* <Newsletter /> */}
      <Section py="py-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-16 py-8">
          <div>
            <div className="w-full">
              <Image src={'/img/logo_big.png'} width={300} height={200} />
            </div>
            <p className="text-xs hidden">
              Sed pottitor lects nibh. Viamus magna justo, lacinia eget
              consectetur sed, convallis at tellus.
            </p>
          </div>
          <div>
            <h4 className="font-caviar text-xl text-primary py-4">
              Quick Links
            </h4>
            <ul className="grid">
              <Link href="#home">
                <a className="font-inter text-white font-medium hover:text-primary mt-4">
                  Accueil
                </a>
              </Link>
              <Link href="#About">
                <a className="font-inter text-white font-medium hover:text-primary mt-4">
                  A propos
                </a>
              </Link>
            </ul>
          </div>
          <div>
            <h4 className="font-caviar text-xl text-primary  py-4">
              Social Media
            </h4>
            <ul className="grid">
              <Link href="#home">
                <a className="font-inter text-white font-medium hover:text-primary mt-4">
                  Instagram
                </a>
              </Link>
              <Link href="#About">
                <a className="font-inter text-white font-medium hover:text-primary mt-4">
                  Facebook
                </a>
              </Link>
            </ul>
          </div>
          <div>
            <h4 className="font-caviar text-xl text-primary  py-4">Contact</h4>
            <div className="grid">
              <div className="mt-4 text-white">
                8 Green Tower, Street Name <br />
                New York City, USA
              </div>
              <div className="font-inter text-white flex gap-2 mt-4">
                Email :
                <a
                  href="mailto:info@dejavu-app.com"
                  className="font-medium hover:text-primary mr-2"
                >
                  info@dejavu-app.com
                </a>
              </div>
              <div className="font-inter text-white flex gap-2 mt-4">
                Tel :
                <a
                  href="tel:+3307889944"
                  className="font-inter text-white font-medium hover:text-primary"
                >
                  +3307889944
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Terms />
    </div>
  )
}
