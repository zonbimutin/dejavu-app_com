import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { RiCloseLine } from 'react-icons/ri'

const Accordion = ({ i, title, text, expanded, setExpanded }) => {
  const isOpen = i === expanded
  return (
    <div>
      <motion.header
        initial={false}
        animate={{ backgroundColor: !isOpen ? '#E8C589' : '#2A2C30' }}
        onClick={() => setExpanded(isOpen ? false : i)}
        className="p-4 cursor-pointer flex justify-between items-center rounded-lg"
      >
        <motion.h3 animate={{ color: isOpen ? '#E8C589' : 'black' }}>
          {title}
        </motion.h3>
        <motion.div
          animate={{
            rotate: isOpen ? '0deg' : '45deg',
            color: isOpen ? '#E8C589' : 'black',
          }}
          className="text-lg"
        >
          <RiCloseLine />
        </motion.div>
      </motion.header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <motion.div
              variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
              transition={{ duration: 0.5 }}
              className="text-white py-4"
            >
              {text}
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  )
}
export default Accordion
