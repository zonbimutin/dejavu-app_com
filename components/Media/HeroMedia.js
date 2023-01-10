import UploadImage from '@components/Basics/UploadImage'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function HeroMedia({ image }) {
  const pointers = [
    { x: '21%', y: '10%', scale: 1 },
    { x: '50%', y: '40%', scale: 0.8 },
    { x: '70%', y: '10%', scale: 1.5 },
  ]

  const clouds = [
    { x: '21%', y: '10%' },
    { x: '50%', y: '40%' },
    { x: '80%', y: '30%' },
    { x: '60%', y: '20%' },
    { x: '40%', y: '10%' },
    { x: '40%', y: '50%' },
  ]

  const mainAnim = {
    hidden: { opacity: 0, y: 100 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: 'easeInOut',
        delay: 0.5,
        type: 'spring',
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
  }

  const container = {
    hidden: { opacity: 0, scale: 0.5, y: -100 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1.5,
        ease: 'easeInOut',
        type: 'spring',
      },
    },
  }

  const mapAnim = {
    hidden: { opacity: 0, y: -200 },
    show: { opacity: 1, y: 0 },
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  }

  const pointerAnim = {
    hidden: { opacity: 0, y: -100 },
    show: { opacity: 1, y: 0 },
  }

  if (!image) return

  return (
    <div className="relative lg:absolute bottom-0 right-0 w-full lg:w-[50%] h-full">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={mainAnim}
      >
        <div className="relative w-full flex justify-center lg:pr-[l0%] mr-0 ml-auto">
          <motion.div
            variants={container}
            className="absolute w-full bottom-[-100px] lg:bottom-[-160px]"
          >
            <Image src={'/img/map.png'} width={1200} height={382} />
          </motion.div>
          <div className="w-[80%] lg:w-[60%]">
            <UploadImage image={image} />
          </div>
          <div className="absolute w-full lg:h-[55%] h-[45%] bottom-[-100px] lg:bottom-[-160px]">
            <motion.div
              variants={mapAnim}
              className="relative w-[90%] mx-auto lg:w-full h-full overflow-hidden"
            >
              {pointers.map((point, key) => {
                return (
                  <Pointer
                    key={key}
                    x={point.x}
                    y={point.y}
                    scale={point.scale}
                    delay={key / 10 + 1.2}
                    variant={pointerAnim}
                  />
                )
              })}
              {/* {clouds.map((point, key) => {
                return (
                  <Cloud
                    key={key}
                    x={point.x}
                    y={point.y}
                    size={point.size}
                    delay={key / 10 + 1.6}
                  />
                )
              })} */}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

const Pointer = ({ x, y, scale, delay, variant }) => {
  return (
    <motion.div
      className="Pointer absolute w-8 lg:w-11"
      style={{ left: x, top: y, zIndex: 3, scale }}
      variants={variant}
      transition={{
        delay,
        ease: 'easeInOut',
        type: 'spring',
      }}
    >
      <Image src={'/img/bitmap.png'} width={100} height={161} />
    </motion.div>
  )
}

const Cloud = ({ x, y, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: y - 100 }}
      animate={{ opacity: 1, y }}
      transition={{
        delay,
        ease: 'easeInOut',
        type: 'spring',
      }}
      className="Pointer absolute"
      style={{ left: x, top: y, zIndex: 3 }}
    >
      <motion.div
        animate={{
          y: [5, -5, 5],
          x: ['0%', '100%', '0%'],
        }}
        transition={{
          repeat: Infinity,
          delay: Math.random() * delay,
          duration: 30 * (Math.random() + 0.5),
          ease: 'easeInOut',
          type: 'spring',
        }}
      >
        <Image src={'/svg/nuage.svg'} width={60} height={50} />
      </motion.div>
    </motion.div>
  )
}
