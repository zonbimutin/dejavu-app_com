import Image from 'next/image'
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa'

const SocialIcons = {
  facebook: <FaFacebookF />,
  linkedin: <FaLinkedinIn />,
  instagram: <FaInstagram />,
  twitter: <FaTwitter />,
}

const ProfileCard = ({ profile }) => {
  const { name, title, desc, image, socials } = profile
  return (
    <div className="bg-gradient-to-r from-primary to-primaryLight rounded-lg overflow-hidden max-w-[250px]">
      <Image src={image} width={300} height={300} />
      <div className="grid gap-2 p-4 text-center">
        <div>
          <h3 className="text-xl text-black font-caviar">{name}</h3>
          <div className="font-bold">{title}</div>
        </div>
        <p className="text-black hidden">{desc}</p>
        {socials?.length && (
          <div className="flex items-center justify-center gap-4 ">
            {socials.map((sn, key) => {
              const icon = sn.type in SocialIcons ? SocialIcons[sn.type] : false

              if (!icon) return

              return (
                <a
                  key={key}
                  className="grid place-content-center w-6 h-6 aspect-square text-black hover:scale-125"
                  href={`${sn.link}`}
                  rel={`noopener`}
                  target={`_blank`}
                >
                  {icon}
                </a>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default ProfileCard
