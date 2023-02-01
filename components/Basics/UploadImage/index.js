import Image from 'next/image'

const UploadImage = ({ image }) => {
  if (!image.data?.attributes) return
  const { url, width, height, alternativeText } = image.data.attributes
  return (
    <Image
      src={url}
      width={width}
      height={height}
      alt={alternativeText ? alternativeText : 'Dejavu image'}
    />
  )
}

export default UploadImage
