import { FaApple } from 'react-icons/fa'
import { DiAndroid } from 'react-icons/di'
import { motion } from 'framer-motion'
import HeroMedia from '@components/Media/HeroMedia'

export default function Hero({ hero }) {
  const { title, subtitle, image } = hero
  return (
    <div id="home" className="Hero min-h-screen bg-background">
      <div className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-12 items-center gap-24 lg:gap-4 relative">
          <div className="lg:col-span-6 h-fit">
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                ease: 'easeInOut',
                type: 'spring',
                duration: 1,
              }}
              viewport={{ once: true }}
            >
              <div className="Text flex flex-col gap-4 text-center lg:text-left">
                <h2 className="text-3xl text-white uppercase lg:text-7xl leading-relaxed lg:leading-snug">
                  {title ?? 'Quand la fiction devient réalité'}
                </h2>
                <h1 className="text-sm uppercase font-inter font-meduim text-primary">
                  {subtitle ??
                    `L’application mobile des lieux de tournage de films, séries et fictions favoris.`}
                </h1>
                <div className="flex flex-wrap gap-4 mt-8 justify-center lg:justify-start">
                  <a href="#" className="btn btn-prim download">
                    <FaApple size={'3em'} />
                    <span>Download for iOS</span>
                  </a>
                  <a href="#" className="btn btn-alt download">
                    <DiAndroid size={'3em'} />
                    <span>Download for Android</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
          <HeroMedia image={image} />
        </div>
      </div>
    </div>
  )
}
