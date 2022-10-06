import Image from 'next/image'
import Slider from 'react-slick'
import Section from '@components/Basics/Section'
import UploadImage from '@components/Basics/UploadImage'

export default function Screenshots({ data }) {
  const collection = data.collection?.data

  if (!collection?.length) return

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: false,
    arrows: false,
    autoplay: collection.length > 5,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
    ],
  }

  return (
    <Section alt>
      <Slider {...settings}>
        {collection.map((value, key) => {
          return (
            <div key={key} className="lg:px-8 laptop:px-4 px-2">
              <UploadImage image={{ data: value }} />
            </div>
          )
        })}
      </Slider>
    </Section>
  )
}
