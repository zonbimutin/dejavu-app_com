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
  }

  const images = [1, 3, 2, 5, 6, 7, 8, 9, 0]

  return (
    <Section alt>
      <Slider {...settings}>
        {images.map((value, key) => {
          return (
            <div className="px-8">
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
