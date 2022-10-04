import Image from 'next/image'
import Slider from 'react-slick'
import Section from '@components/Basics/Section'

export default function Screenshots() {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: false,
    arrows: false,
    autoplay: true,
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

  const images = [1, 3, 2, 5, 6, 7, 8, 9, 0]

  return (
    <Section alt>
      <Slider {...settings}>
        {images.map((value, key) => {
          return (
            <div className="lg:px-8 laptop:px-4 px-2">
              <Image
                className="w-5"
                src={'/img/iphone.png'}
                width={500}
                height={1000}
                layout="intrinsic"
              />
            </div>
          )
        })}
      </Slider>
    </Section>
  )
}
