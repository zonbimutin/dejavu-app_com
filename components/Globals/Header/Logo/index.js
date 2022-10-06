import UploadImage from '@components/Basics/UploadImage'
import Image from 'next/image'

export default function Logo({ image }) {
  return (
    <a href="#" className="Logo flex items-center">
      {image && <UploadImage image={image} />}
    </a>
  )
}
