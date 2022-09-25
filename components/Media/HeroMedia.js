import { motion } from 'framer-motion'
import Image from 'next/image'

export default function HeroMedia() {
  const pointers = [
    { x: '21%', y: '10%', size: 100 },
    { x: '50%', y: '40%', size: 60 },
    { x: '70%', y: '10%', size: 80 },
  ]

  const clouds = [
    { x: '21%', y: '10%' },
    { x: '50%', y: '40%' },
    { x: '80%', y: '30%' },
    { x: '60%', y: '20%' },
    { x: '40%', y: '10%' },
    { x: '40%', y: '50%' },
  ]

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

  const item = {
    hidden: { opacity: 0, y: -200 },
    show: { opacity: 1, y: 0 },
  }
  return (
    <div className="absolute bottom-0 right-0 w-[60%] h-full">
      <div className="relative w-full h-[80%] flex justify-center pl-[10%]">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="absolute w-full h-[70%] bottom-[-200px]"
        >
          <Image src={'/svg/map.svg'} layout="fill" />
        </motion.div>
        <Image
          src={'/svg/tel.svg'}
          layout="intrinsic"
          height={400}
          width={400}
          priority
        />
        <div className="absolute w-full h-[70%] bottom-[-200px]">
          <div className="relative w-full h-full">
            {pointers.map((point, key) => {
              return (
                <Pointer
                  key={key}
                  x={point.x}
                  y={point.y}
                  size={point.size}
                  delay={key / 10 + 1.6}
                />
              )
            })}
            {clouds.map((point, key) => {
              return (
                <Cloud
                  key={key}
                  x={point.x}
                  y={point.y}
                  size={point.size}
                  delay={key / 10 + 1.6}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

const Pointer = ({ x, y, size, delay }) => {
  return (
    <motion.div
      className="Pointer absolute"
      style={{ left: x, top: y, zIndex: 3 }}
      initial={{ opacity: 0, y: y - 100 }}
      animate={{ opacity: 1, y }}
      transition={{
        delay,
        ease: 'easeInOut',
        type: 'spring',
      }}
    >
      <Image src={'/svg/localisation.svg'} width={size} height={size} />
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
