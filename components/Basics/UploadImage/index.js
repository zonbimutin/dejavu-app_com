import Image from 'next/image'

const UploadImage = ({ image }) => {
  if (!image.data?.attributes) return
  const { url, width, height } = image.data.attributes
  return <Image src={url} width={width} height={height} />
}

export default UploadImage
