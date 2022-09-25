import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa'

const NETWORKS = [
  { icon: <FaFacebookF />, link: 'https://www.facebook.com/' },
  { icon: <FaLinkedinIn />, link: 'https://www.linkedin.com/' },
  { icon: <FaInstagram />, link: 'https://www.instagram.com/' },
  { icon: <FaTwitter />, link: 'https://twitter.com/' },
]
const SocialIcons = {
  facebook: <FaFacebookF />,
  linkedin: <FaLinkedinIn />,
  instagram: <FaInstagram />,
  twitter: <FaTwitter />,
}

const Socials = () => {
  return (
    <>
      {NETWORKS.map((social, key) => (
        <a
          key={key}
          className="w-8 h-8 grid place-content-center aspect-square text-white hover:text-primary rounded-full border-solid border-2 border-white hover:border-primary "
          href={`${social.link}`}
          rel={`noopener`}
          target={`_blank`}
        >
          {social.icon}
        </a>
      ))}
    </>
  )
}

export default Socials
