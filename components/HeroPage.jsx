import Image from 'next/image'

export default ({ title, image, excerpt, publishedAt }) => {
  return (
    <div className="Hero Hero-page py-5 bg-background bg-footer-texture bg-repeat bg-center bg-16 bg-fixed isolate relative">
      {image?.data?.attributes && <HeroImage image={image} />}
      <div className="container px-4 mx-auto grid place-items-center text-center">
        <div className="lg:max-w-[70%]">
          <h1 className="text-white">{title}</h1>
          {excerpt && <p className="text-white mt-4">{excerpt}</p>}
          {publishedAt && (
            <p className="text-primary text-bolder mt-4">
              <small>{new Date(publishedAt).toUTCString()}</small>
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

function HeroImage({ image }) {
  const { width, url, height, alternativeText } = image.data.attributes

  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30">
      <Image
        src={url}
        width={width}
        height={height}
        alt={alternativeText ? alternativeText : 'Dejavu image'}
        layout="fill"
        className="object-cover"
      />
    </div>
  )
}
